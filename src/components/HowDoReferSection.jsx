import { Link } from "react-router-dom";

const HowDoReferSection = () => {
  return (
    <section className=" text-center py-10 content-center bg-primary "> 
        <p className="text-2xl text-black" >How Do i <span className="text-blue-800">Refer ?</span> </p>
        <img
          className="my-10 m-auto only-desktop" 
          src="image-102.png"/> 
        <img 
          className="my-10 m-auto only-phone" 
          src="image-103.png"/> 

        <Link  to="refer"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 me-4 mb-4">
               Refer Now
        </Link>
    </section>
  );
};

export default HowDoReferSection;