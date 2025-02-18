import { Link } from "react-router-dom";

const Hero = () => {
  return (
<section className="bg-white  ">
    <div className="m-5">
      
    <div className="grid lg:w-2/3 bg-primary px-4 py-4  rounded-lg shadow-xl mx-auto lg:gap-0 xl:gap-0  lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 m-8">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              Let`s Learn <br/> & Earn</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl  ">
              Get a chance to win up-tp <span className="text- font-bold font- text-blue-500">Rs. 15000</span></p>
            <Link  to="refer"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4 me-4 mb-4">
               Refer Now
            </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="image-101.png" alt="mockup" />
        </div>        
    </div>
    </div>
    <br/>        

</section>
  );
};

export default Hero;  