import SmCardFrame from "./raw_components/sm_card_frame"

export default function CompanyInsights() {

  return(
    <>
      <div className="flex flex-col items-center w-full mr-2">
        {/* Title of Company insights */}
        <div className="flex justify-center text-xl rounded-2xl bg-2o-gray w-full">
          Company Insights
        </div>
        <div className="w-full mt-2">
          <SmCardFrame
            title="Card 1 Title"
            description="This is the description for Card 1."
          />
        </div>
      </div>
    </>
  )
}
