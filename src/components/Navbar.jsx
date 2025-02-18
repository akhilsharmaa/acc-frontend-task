import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed z-10 top-0 w-full h-max bg-white border-gray-200 bottom-1 shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
                <div href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="logo_small.jpeg" className="h-8" alt="Flowbite Logo" />
                    
                    <a href=""
                        className="text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
                        Explore
                    </a>
                    
                 </div> 
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white :bg-gray-800 md::bg-gray-900 :border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md::text-blue-500 :bg-blue-600 md::bg-transparent" aria-current="page">Home</a>
                        </li> 
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md::hover:text-blue-500 :hover:bg-gray-700  md::hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md::hover:text-blue-500 :hover:bg-gray-700  md::hover:bg-transparent">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md::hover:text-blue-500 :hover:bg-gray-700  md::hover:bg-transparent">Contact</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav> 
    );
};

export default Navbar;