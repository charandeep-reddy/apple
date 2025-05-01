import './App.css'
import "./index.css"
import Navbar from './components/Navbar'
import OfferBanner from './components/OfferBanner'
import Difference from './components/Difference'
import Categories from './components/Categories'
import QuickLinks from './components/QuickLinks'
import Latest from './components/Latest'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FooterMenu from './components/FooterMenu'
import Personalization from './components/Personlization'
import Support from './components/Support'
import AppleExperience from './components/AppleExperience'
import Special from './components/Special'
import Accessories from './components/Accessories'

function App() {
  return (
    <>
      <div className="antialiased bg-[#f5f5f7] w-full h-screen">
      <Navbar />
      <OfferBanner />
      <Hero/>
      <Categories />
      <Latest/>
      <Accessories/>
      <Personalization/>
      <Difference />
      <Support/>
      <AppleExperience/>
      <Special/>
      <QuickLinks/>
      <Footer/>
      <FooterMenu/>
      
        {/* <div className="flex flex-col">
          <div className="pb-6">
            <DualText
              highlightText="Help is here"
              textColor='#ff3c26'
              greyText="Whenever and however you need it"
            />
          </div>

          <div className="gap-6">
            
            />

            <Card
              tag="TODAY AT APPLE"
              title={AppleIntelligence()}
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
          </div>
        </div> */}
      </div>
    </>
  )};
    

export default App;