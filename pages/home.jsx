import Hero from "../src/components/Hero"; 
import HowDoReferSection from "../src/components/HowDoReferSection";
import Footer from "../src/components/Footer";
import FAQ from "../src/components/FAQ"; 
import SubNavbar from "../src/components/SubNavbar";

const Home = () => { 

  return (
    <div > 
      <SubNavbar/>
      <Hero />
      <HowDoReferSection />
      <FAQ />
      <div className="m-auto lg:w-2/3 my-10">
        <img  src="./footer-image.png"/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
