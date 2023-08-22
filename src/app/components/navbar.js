"use client"; // This is a client component 👈🏽

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from './button';
import app from '../services/firebase'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default function Navbar() {

  const [user, setUser] = useState(null);
  const auth = getAuth();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      try {
        await signOut(auth);
      } catch (error) {
        console.error('Error signing out:', error);
      }
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-foreground-rgb-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="../">
          <span className="font-semibold text-xl mr-8">HOP Ventures</span>
        </Link>
        <Link href="../jobs">
          <span className="hidden md:inline-block text-sm mr-6">Browse jobs</span>
        </Link>
        <Link href="../companies">
          <span className="hidden md:inline-block text-sm">Featured companies</span>
        </Link>
      </div>

      <div>
        <span className="hidden md:inline-block text-white font-semibold text-xl tracking-tight mr-8">Sign up</span>
          {user !== null ? (
            <Button className="hidden md:inline-block btn-primary cta-primary" onClick={()=>handleLogout()}>Log out</Button>
          ) : (
            <Link href="../login">
              <Button className="hidden md:inline-block btn-primary cta-primary">Log in</Button>
            </Link>
          )
            }
      </div>

      {/* Drop down button on mobile view */}
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white-200 border-foreground-rgb-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path
              d="M0 0h20v20H0V0zm2 3h16v2H2V3zm0 5h16v2H2V8zm0 5h16v2H2v-2z"
            />
          </svg>
        </button>
      </div>

    </nav>
  )
}
