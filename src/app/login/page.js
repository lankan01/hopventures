"use client"; // This is a client component 👈🏽
import Image from 'next/image'
import GoogleLogo from '../images/google-logo.png'
import app from '../services/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { redirect } from 'next/navigation'

export default function LoginPage() {

  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  const notify = () => toast("Wow so easy !");

  const redirectIfUserIn = () => {
    try {
      if (auth.currentUser) {
        window.location.href = "/";
      }
    } catch (error) {
      console.error('Error redirecting:', error);
    }
  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('Signed in user:', user);
      redirectIfUserIn();
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error('Error signing in with Google:', error);
    });
  }

  return(
    <>
      <div className="flex justify-center items-center">
        <div className="bg-2o-gray rounded-lg p-4 mt-8 shadow-md w-8/12 flex sm:flex-row flex-col items-center">
          <h1 className="mr-1 sm:mr-8 text-5xl font-bold mb-8 sm:mb-2 sm:w-2/5 w-full">Social Login Buttons</h1>

          <div onClick={()=>signInWithGoogle()} className="flex bg-white text-black rounded-lg sm:w-2/4 w-full p-2 h-14 cursor-pointer">
            <Image src={GoogleLogo} alt="Google Logo" width={40} height={40} className="align-top w-10 h-10 p-1 sm:ml-2 mb-2 sm:mr-4 mr-2" />
            <span className="pt-2 text-sm sm:text-base">Continue with Google</span>
          </div>

        </div>
      </div>
    </>
  )
}
