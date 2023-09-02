"use client"
import FormDropdown from "./skeletons/formdropdown"

export default function LocationType() {

  const options = [
    "🌍 Remote",
    "🏢 Onsite",
    "🔄 Hybrid",
  ]

  const handleLocationSelect = (value) => {
    // Handle category selection logic here
    console.log(value)
  };

  return (
    <>
      <FormDropdown
        options={options}
        onSelect={handleLocationSelect}
        label="Work Location Format"
      />
    </>
  )
}
