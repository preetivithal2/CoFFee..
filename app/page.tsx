import Image from "next/image";
import Navbar from "./_components/Navbar";
import Banner from "./_components/Banner";
import Services from "./_components/Services";

export default function Home() {
  return (
    <div>

      <Navbar />
      <Banner />
      <Services />
    </div>
  );
}
