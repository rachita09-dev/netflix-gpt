import React, { useEffect } from 'react'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice'
import { LOGO } from '../Utils/constants';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unsubscribed when component unmounts
    return () => unsubscribe();
  }, [])

  return (

    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
        src={LOGO} alt='logo' />

      {user && (<div className='flex p-2'>
        <img className='w-12 h-12' src={user?.photoURL} alt='userICon' />
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header