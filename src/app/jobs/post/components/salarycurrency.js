"use client"

import FormDropdown from "./skeletons/formdropdown";

export default function SalaryCurrency() {

  const handleCurrencySelect = (currency) => {
    // Handle currency selection logic here
  };

  return (
    <FormDropdown
      options={["USD", "EUR", "GBP", "CAD", "AUD", "SGD", "INR", "PKR", "BDT", "NGN", "PHP", "IDR", "MYR", "VND", "THB", "EGP", "TRY", "CNY", "JPY", "KRW", "RUB", "MXN", "BRL", "ZAR", "SAR", "AED", "QAR", "KWD", "OMR", "JOD", "BHD", "LBP", "IQD", "ILS", "CLP", "ARS", "COP", "PEN", "UYU", "CRC", "GTQ", "HNL", "PAB", "BOB", "PYG", "DOP", "NIO", "JMD", "TTD", "XCD", "BZD", "BBD", "GYD", "HTG", "SRD", "XOF", "XAF", "XPF", "MAD", "DZD", "TND", "MRO", "LYD", "SDG", "STD", "GMD", "KES", "UGX", "TZS", "SOS", "RWF", "MZN", "SCR", "MUR", "SZL", "LSL", "BWP", "ZMW", "MWK", "AOA", "XAU", "XAG", "XPT", "XPD"]}
      onSelect={handleCurrencySelect}
      label="Currency"
    />
  )
}
