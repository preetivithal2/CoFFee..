import Image from "next/image";
import Navbar from "./_components/Navbar";
import Banner from "./_components/Banner";
import Services from "./_components/Services";
import Offer from "./_components/Offer";
import Footer from "./_components/Footer";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Offer />
      <Footer />
      
          </div>
  );
}
