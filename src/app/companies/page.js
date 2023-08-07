"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase"; // 👈🏽 import the db from firebase.js

export default function CompanyInfo() {
  const [companyData, setCompanyData] = useState(null);

  const fetchCompanyData = async () => {
    const docRef = doc(db, "companies", "Vaxg6MGRZ12fMkImBDVj");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setCompanyData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  // Call the function when the component mounts (you can trigger it based on your requirements)
  useEffect(() => {
    fetchCompanyData();
  }, []);

  return (
    <>
      <h1>Company Info</h1>
      {companyData && (
        <div>
          <p>Name: {companyData.name}</p>
          <p>Category: {companyData.category}</p>
          <p>Founded: {companyData.year_founded}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </>
  )
}
