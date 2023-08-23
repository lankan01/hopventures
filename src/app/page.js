"use client"; // This is a client component 👈🏽

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function Home() {

  const [user, setUser] = useState(null);
  const isNotificationShown = localStorage.getItem('notificationShown') === 'true';
  const [notificationShown, setNotificationShown] = useState(isNotificationShown);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [auth, user]);

  const notify = () => toast("Welcome, " + user.displayName + ". You've signed in successfully!");

  useEffect(() => {
    if (user !== null && !notificationShown) {
      notify();
      setNotificationShown(true);
      localStorage.setItem('notificationShown', 'true'); // Mark the notification as shown
    }
  }, [user, notificationShown]);

  const Name = user ? user.displayName : 'stranger';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Helloooooo {Name}!

      {user !== null ? (
        <div>
          <ToastContainer />
        </div>
      ) : (null)}
    </main>
  )
}
