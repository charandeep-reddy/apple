import "./Index.css";
import Card from "./components/Card";
import DualText from "./components/dualText";
import AppleIntelligence from "./components/AppleIntelligence";


function App() {
  return (
    <>
      <div className="antialiased bg-[#f5f5f7] w-full h-screen">
        <div className="flex flex-col">
          <div className="pb-6">
            <DualText
              highlightText="Help is here"
              greyText="Whenever and however you need it"
            />
          </div>

          <div className="gap-6">
            <Card
              tag="APPLE SPECIALIST"
              title="Shop one on one with a Specialist online."
              image={
                "src/assets/apple-img/store-card-50-earth-day-specialist-help-202504.jpeg"
              }
            />

            <Card
              tag="TODAY AT APPLE"
              title={"Join free sessions at your Apple Store."}
              description="Learn about the latest features and how to go further with your Apple devices."
              image={"src/assets/apple-img/store-card-50-TAA-202310.jpeg"}
            />

            <Card
              tag="BUSINESS"
              title="From enterprise to small business, we’ll work with you."
              textColor="#FFFFFF"
              image={
                "src/assets/apple-img/iphone-card-40-business-202409_GEO_IN.jpeg"
              }
            />

            {/* <Card
            tag="PERSONAL SETUP"
            title="Set up your new device with help from a Specialist."
            description="Let us guide you through data transfer, the latest features and more, in an online, one-to-one session."
            image={"src/assets/apple-img/store-card-50-personal-setup-202408.webp"}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;