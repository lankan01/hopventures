"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/firebase";                                      // 👈🏽 import the db from firebase.js
import Card from "../components/card";

export default function CompanyInfo() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {                                                             // 👈🏽 useEffect === run this once, then the page loads
    const fetchCompanyData = async () => {                                      // async is used because we need to wait for the data to be returned
      const queryCompanies = await getDocs(collection(db, "companies"));

      const companyData = queryCompanies.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(companyData);

      setCompanies(companyData);
    };

    fetchCompanyData();
  }, []);

  return (
    <>
      <h1>Company Info</h1>
      <div className="card-container">
        {companies.length > 0 ? (
          companies.map((company) => (
            <Card key={company.id} company={company} />
          ))
        ) : (
          <p>Loading companies...</p>
        )}
      </div>
    </>
  );
}
