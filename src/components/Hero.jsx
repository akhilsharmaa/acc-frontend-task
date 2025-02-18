const Hero = () => {
  return (
    <section className="flex flex-row justify-center items-center">
      <div className="m-10 hero-container border border-gray-200 rounded-lg shadow-xl ">
        <div className="grid max-w-screen-xl mx-auto  lg:grid-cols-12">
          <div className="ml-10 mr-auto place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mb-4 text-2xl  font-extrabold tracking-tight leading-none md:text-6xl text-grey-700">
              Let`s Learn & Earn
            </h2>
            <br/>
            <p className="mb-6 font-normal text-3xl font-light text-black">
              Get a chance to win up-tp <span className="text-4xl font-bold font- text-blue-500">Rs. 15000</span>
            </p>  
            <br/>
            <button type="button" className="px-5 py-3 text-xl  text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Refer Now
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="image-101.png" alt="mockup" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;