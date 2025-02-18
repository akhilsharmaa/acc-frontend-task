import { useState, useEffect} from "react";

// eslint-disable-next-line react/prop-types
const RefralForm = ({onClose}) => {

    const [myEmailValue, setMyEmailValue] = useState();
    const [myFirstNameValue, setMyFirstNameValue] = useState();
    const [myLastNameValue, setMyLastNameValue] = useState();  
    const [refreeEmailValue, setRefreeEmailValue] = useState();
    const [refreeFirstNameValue, setRefreeFirstNameValue] = useState();
    const [refreeLastNameValue, setRefreeLastNameValue] = useState();  

    const [myEmailValidateError, setMyEmailValidateError] = useState(false);
    const [myFirstNameValidateError, setMyFirstNameValidateError] = useState(false); 
    const [refreeEmailValidateError, setRefreeEmailValidateError] = useState(false);
    const [refreeFirstNameValidateError, setRefreeFirstNameValidateError] = useState(false); 


    // validating the refree email 
    useEffect(() => {
        if (!myEmailValue) {
            setMyEmailValidateError("Email can't be blank, please enter email,");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(myEmailValue)) {
            setMyEmailValidateError("please provide a valid email, (eg. rak@gmail.com)");
        } else {
            setMyEmailValidateError(false); // Clear error if email is valid
        }
    }, [myEmailValue]);


    // validating the refree FIRST NAME 
    useEffect(() => {
        if (!myFirstNameValue) {
            setMyFirstNameValidateError("Email can't be blank, please enter email,");
        } else if (myFirstNameValue.length < 3) {
            setMyFirstNameValidateError("First name should be atlease 3 character.");
        } else {
            setMyFirstNameValidateError(''); // Clear error if email is valid
        }
    }, [myFirstNameValue]);

    
    // validating the refree email 
    useEffect(() => {
        if (!refreeEmailValue) {
            setRefreeEmailValidateError("Email can't be blank, please enter email,");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(refreeEmailValue)) {
            setRefreeEmailValidateError("please provide a valid email, (eg. rak@gmail.com)");
        } else {
            setRefreeEmailValidateError(false); // Clear error if email is valid
        }
    }, [refreeEmailValue]);


    // validating the refree LAST NAME  
    useEffect(() => {
        if (!refreeFirstNameValue) {
            setRefreeFirstNameValidateError("Email can't be blank, please enter email,");
        } else if (refreeFirstNameValue.length < 3) {
            setRefreeFirstNameValidateError("First name should be atlease 3 character.");
        } else {
            setRefreeFirstNameValidateError(''); // Clear error if email is valid
        }
    }, [refreeFirstNameValue]);


    return (
    <div className="fixed w-full top-0 bg-transparent-100">

            <div className="mx-auto bg-gray-100  max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">
                    Refer Now & Earn
                </h1>

                <p className="mt-4 text-red-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                ipsa culpa autem, at itaque nostrum!
                </p>
            </div>

            <form action="#" className="mx-auto mt-8 mb-0 max-w-md space-y-4"> 

                <div>
                    <p className="my-2 text-xl font-medium text-blue-600"> 
                        Your Information 
                    </p>
                    
                    <input 
                        type="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        value={myEmailValue} 
                        onChange={e => setMyEmailValue(e.target.value)} 
                        placeholder="myemail@gmail.com"/>
                    
                    {myEmailValidateError &&  
                        <p id="helper-text-explanation" className="p-1 text-sm text-red-400 "> 
                        {myEmailValidateError} 
                        </p>
                    }

                    {/* MY FIRST NAME */}
                    {/* <label htmlFor="my_first_name" className="block mb-1 text-sm font-medium text-gray-900">Your email</label> */}
                    <input 
                        type="text" 
                        className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        value={myFirstNameValue} 
                        onChange={e => setMyFirstNameValue(e.target.value)} 
                        placeholder="First Name"/>
                    
                    {myFirstNameValidateError &&  
                        <p id="helper-text-explanation" className="p-1 text-sm text-red-500 dark:text-gray-500"> 
                        {myFirstNameValidateError} 
                        </p>
                    }


                    {/* MY LAST NAME */}
                    {/* <label htmlFor="my_first_name" className="block mb-1 text-sm font-medium text-gray-900">Your email</label> */}
                    <input 
                        type="text"  
                        value={myLastNameValue} 
                        onChange={e => setMyLastNameValue(e.target.value)} 
                        className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        placeholder="Last Name"/>
                </div>


                <hr/>
                

                <div>
                    <p className="my-2 text-xl font-medium text-blue-600"> 
                        Refree Information 
                    </p>
                    
                    {/* Refreee email */}
                    {/* <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">Your email</label> */}
                    <input 
                        type="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        value={refreeEmailValue} 
                        onChange={e => setRefreeEmailValue(e.target.value)} 
                        placeholder="refreee@gmail.com"/>
                    {
                        refreeEmailValidateError && 
                        <p id="helper-text-explanation" className="mt-0 text-sm text-red-500 dark:text-gray-500">
                        {refreeEmailValidateError}
                        </p>
                    }

                    {/* Refreee FIRST NAME */}
                    {/* <label htmlFor="my_first_name" className="block mb-1 text-sm font-medium text-gray-900">Your email</label> */}
                    <input 
                        type="text" 
                        className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        value={refreeFirstNameValue} 
                        onChange={e => setRefreeFirstNameValue(e.target.value)} 
                        placeholder="First Name"/>
                    {
                        refreeFirstNameValidateError && 
                        <p id="helper-text-explanation" className="mt-1 text-sm text-red-500 dark:text-gray-500">
                        {refreeFirstNameValidateError}
                        </p>
                    }


                    {/* Refreee LAST NAME */}
                    {/* <label htmlFor="my_first_name" className="block mb-1 text-sm font-medium text-gray-900">Your email</label> */}
                    <input 
                        type="text"  
                        className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                        value={refreeLastNameValue} 
                        onChange={e => setRefreeLastNameValue(e.target.value)} 
                        placeholder="Last Name"/>
                    
                </div>


                <div className="flex items-center justify-between">
                <button onClick={onClose} className="mt-4   text-black px-4 py-2 rounded hover:text-red-600">
                    CLOSE 
                </button>

                <button
                    type="submit"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                    Sign in
                </button>
                </div>
            </form>
            </div>
    </div>);
};

export default RefralForm;