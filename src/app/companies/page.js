"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/firebase"; // 👈🏽 import the db from firebase.js

export default function CompanyInfo() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanyData = async () => {
      const querySnapshot = await getDocs(collection(db, "companies"));

      const companyData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setCompanies(companyData);
    };

    fetchCompanyData();
  }, []);


  return (
    <>
      <h1>Company Info</h1>
      {companies.length > 0 ? (
        companies.map((company) => (
          <div key={company.id}>
            <p>Name: {company.name}</p>
            <p>Category: {company.category}</p>
            <p>Founded: {company.year_founded}</p>
            <br />
            {/* Add more details as needed */}
          </div>
        ))
      ) : (
        <p>Loading companies...</p>
      )}
    </>
  );
}
