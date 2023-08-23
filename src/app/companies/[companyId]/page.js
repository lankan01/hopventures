"use client"; // This is a client component 👈🏽

import { useParams } from 'next/navigation'; // Corrected import

import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";
import CompanySummary from './company_summary';
import CompanyInsights from './company_insights';
import IndustryInsights from './industry_insights';

export default function Company() {
  const params = useParams();
  const companyID = params.companyId;

  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const queryCompany = await getDoc(doc(db, "companies", companyID));
        if (queryCompany.exists()) {
          setCompany(queryCompany.data());
        } else {
          console.log("Company not found");
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, [companyID]);

  return (
    <>
      {/* Back button */}
      {/* Company summary card */}
      {company ?
        <>
          <div className="flex flex-col mr-4 ml-4 sm:mr-24 sm:ml-24">
            <CompanySummary company={company} />
            <div className="flex flex-col sm:flex-row w-full mt-4">
              <CompanyInsights company={company} />
              <IndustryInsights company={company} />
            </div>
          </div>
        </>
        :
        <p>Loading company...</p>
      }
      {/* Col one - Company info */}
      {/* Col two - Industry info */}
    </>
  );
}
