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
      <Footer />
    </div>
  );
};

export default Home;
