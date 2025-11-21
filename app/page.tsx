import Image from "next/image";
import Navbar from "./_components/Navbar";
import Banner from "./_components/Banner";
import Services from "./_components/Services";
import Offer from "./_components/Offer";
import NewBanner from "./_components/NewBanner";
import ContactFooter from "./_components/FooterContact";
import ServicesSection from "./_components/Deliciousservices";




export default function Home() {
  return (
    <div>

      <Navbar />
      {/* <Banner /> */}
      <NewBanner />
      <Services />


      <Offer />
      <ServicesSection />
      <ContactFooter />
    </div>
  );
}
