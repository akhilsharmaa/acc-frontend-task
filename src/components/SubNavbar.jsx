const SubNavbar = () => {
    return (
        <nav className="bg-white border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap  items-center justify-center mx-auto p-4"> 
                <div className="hidden w-full md:block md:w-auto"  id="navbar-dropdown">
                    <ul className="flex flex-col font-medium bg-primary py-2 px-16 mt-4 border border-gray-100 rounded-full bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white :bg-gray-800 md::bg-gray-900 :border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-2 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md::text-blue-500 :bg-blue-600 md::bg-transparent" aria-current="page">Refer</a>
                        </li> 
                        <li>
                            <a href="#" className="block py-2 px-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md::hover:text-blue-500 :hover:bg-gray-700  md::hover:bg-transparent">Benefits</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md::hover:text-blue-500 :hover:bg-gray-700  md::hover:bg-transparent">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md::hover:text-blue-500 :hover:bg-gray-700  md::hover:bg-transparent">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
};

export default SubNavbar;