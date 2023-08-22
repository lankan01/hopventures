"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import CompanyCard from "./company_card";

export default function CompanyInfo() {
  const [companies, setCompanies] = useState([]); // Changed 'companies' to 'companies'

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "companies"))

        const companyDataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setCompanies(companyDataArray); // Set the entire array of company data
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, []);

  return (
    <>
      <h1>Company Info</h1>
      <div className="flex flex-wrap sm:justify-center justify-left">
        {companies.length > 0 ? (
          companies.map((company) => (
            <CompanyCard key={company.id} company={company} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4" />
          )) ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
    </>
  );
}
