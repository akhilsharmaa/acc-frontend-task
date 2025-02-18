const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="logo_small.jpeg" className="h-8" alt="Flowbite Logo" />
                 </a> 
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white :bg-gray-800 md::bg-gray-900 :border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md::text-blue-500 :bg-blue-600 md::bg-transparent" aria-current="page">Home</a>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto  md::hover:text-blue-500 :focus:text-white :border-gray-700 :hover:bg-gray-700 md::hover:bg-transparent">Dropdown <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg></button> 
                            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44  :divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 :text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  :text-gray-200 ">Sign out</a>
                                </div>
                            </div>
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