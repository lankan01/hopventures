import SmCardFrame from "./raw_components/sm_card_frame"


export default function IndustryInsights() {

  return(
    <>
      <div className="flex flex-col items-center w-full mt-2 sm:mt-0">
        {/* Title of Industry insights */}
        <div className="flex justify-center text-xl rounded-2xl bg-2o-gray w-full">
          Industry Insights
        </div>

        <div className="w-full mt-2">
          <SmCardFrame
            title="Card 1 Title"
            description="This is the description for Card 1."
            backgroundColor={"bg-2o-gray"}
          />
          <SmCardFrame
            title="Card 1 Title"
            description="This is the description for Card 1."
            backgroundColor={"bg-2o-gray"}
          />
        </div>
      </div>
    </>
  )
}
