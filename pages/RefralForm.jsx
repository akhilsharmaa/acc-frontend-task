import { useState, useEffect } from "react";

const API_URL = "https://accredian-backend-task-7yn9.onrender.com"; 

// eslint-disable-next-line react/prop-types
const RefralForm = ({ onClose }) => {
    const [myEmailValue, setMyEmailValue] = useState("");
    const [myFirstNameValue, setMyFirstNameValue] = useState("");
    const [myLastNameValue, setMyLastNameValue] = useState("");
    const [refreeEmailValue, setRefreeEmailValue] = useState("");
    const [refreeFirstNameValue, setRefreeFirstNameValue] = useState("");
    const [refreeLastNameValue, setRefreeLastNameValue] = useState("");
    const [refralcode, setRefralcode] = useState("");

    const [refralcodeValidateError, setRefralcodeValidateError] = useState("");
    const [myEmailValidateError, setMyEmailValidateError] = useState("");
    const [myFirstNameValidateError, setMyFirstNameValidateError] = useState("");
    const [refreeEmailValidateError, setRefreeEmailValidateError] = useState("");
    const [refreeFirstNameValidateError, setRefreeFirstNameValidateError] = useState("");

    const [isloading, setIsLoading] = useState(false);
    const [responseError, setResponseError] = useState(false);
    const [responseSuccess, setResponseSuccess] = useState(false);

    const [isFormValid, setIsFormValid] = useState(false);

    // Validating every field form whenever any field changes
    useEffect(() => {
    
        const isRefralCodeValid = refralcode.length === 6 && !refralcodeValidateError;
        const isMyEmailValid = myEmailValue && !myEmailValidateError;
        const isMyFirstNameValid = myFirstNameValue && !myFirstNameValidateError;
        const isRefreeEmailValid = refreeEmailValue && !refreeEmailValidateError;
        const isRefreeFirstNameValid = refreeFirstNameValue && !refreeFirstNameValidateError;

        setIsFormValid(
            isRefralCodeValid &&
            isMyEmailValid &&
            isMyFirstNameValid &&
            isRefreeEmailValid &&
            isRefreeFirstNameValid
        );
    }, [
        refralcode,
        refralcodeValidateError,
        myEmailValue,
        myEmailValidateError,
        myFirstNameValue,
        myFirstNameValidateError,
        refreeEmailValue,
        refreeEmailValidateError,
        refreeFirstNameValue,
        refreeFirstNameValidateError,
    ]);

    // Validate the referral code
    useEffect(() => {
        if (!refralcode) {
            setRefralcodeValidateError("Referral code can't be blank, please enter code.");
        } else if (refralcode.length !== 6) {
            setRefralcodeValidateError("Please enter a valid referral code (must be a 6-digit code).");
        } else {
            setRefralcodeValidateError("");
        }
    }, [refralcode]);

    // Validate the user's email
    useEffect(() => {
        if (!myEmailValue) {
            setMyEmailValidateError("Email can't be blank, please enter email.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(myEmailValue)) {
            setMyEmailValidateError("Please provide a valid email (e.g., rak@gmail.com).");
        } else {
            setMyEmailValidateError("");
        }
    }, [myEmailValue]);

    // Validate the user's first name
    useEffect(() => {
        if (!myFirstNameValue) {
            setMyFirstNameValidateError("First name can't be blank, please enter your first name.");
        } else if (myFirstNameValue.length < 3) {
            setMyFirstNameValidateError("First name should be at least 3 characters.");
        } else {
            setMyFirstNameValidateError("");
        }
    }, [myFirstNameValue]);

    // Validate the referee's email
    useEffect(() => {
        if (!refreeEmailValue) {
            setRefreeEmailValidateError("Email can't be blank, please enter email.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(refreeEmailValue)) {
            setRefreeEmailValidateError("Please provide a valid email (e.g., rak@gmail.com).");
        } else {
            setRefreeEmailValidateError("");
        }
    }, [refreeEmailValue]);

    // Validate the referee's first name
    useEffect(() => {
        if (!refreeFirstNameValue) {
            setRefreeFirstNameValidateError("First name can't be blank, please enter first name.");
        } else if (refreeFirstNameValue.length < 3) {
            setRefreeFirstNameValidateError("First name should be at least 3 characters.");
        } else {
            setRefreeFirstNameValidateError("");
        }
    }, [refreeFirstNameValue]);


    const handleSubmit = async () => {


        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                "referrer_first_name" : myFirstNameValue, 
                "referrer_last_name" : myLastNameValue,
                "referrer_email": myEmailValue, 
                "referal_code": refralcode, 
                "referee_first_name" : refreeFirstNameValue,
                "referee_last_name": refreeLastNameValue,
                "referee_email": refreeEmailValue,
                "referrer_source_of_information": "optional"
            }),
        };

        setIsLoading(true);
        
        try {
            
            const response = await fetch(`${API_URL}/refer/new`, requestOptions); 
            const result = await response.json(); 
            console.log(result);

            if(response.ok){ 
                setResponseSuccess(result.message);   
                setResponseError(false);   
            }else {
                setResponseSuccess(false);   
                setResponseError(result.message);   
            }
            
        } catch (error) {
            console.error(error);
            setIsLoading(false);
            setResponseError("Something  went wrong please try again later. ");   
        }

        setIsLoading(false);
    }


    return (
        <div className=" w-full bg-gray-100">
            <div className="mx-auto  max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Refer Now & Earn</h1>
                    <p className="mt-4 text-gray-500">
                        Refer your friend and earn points. On successfully creating the referral, you both will receive an email.
                    </p>
                </div>

                <form action="#" className="mx-auto mt-8 mb-0 max-w-md space-y-4">



                    <div className="p-6 border-2 rounded-lg border-dashed bg-blue-50">
                        <p className="my-2 text-xl font-medium text--600">Enter Referral Code</p>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={refralcode}
                            onChange={(e) => setRefralcode(e.target.value)}
                            maxLength={6}
                            placeholder="Referral Code"
                        />
                        {refralcodeValidateError && (
                            <p id="helper-text-explanation" className="p-1 flex text-sm text-gray-500">
                                <img className="w-3 opacity-50 h-3 m-1" src="error_icon.png" />
                                {refralcodeValidateError}
                            </p>
                        )}
                    </div>

                    <hr />

                    <div>
                        <p className="my-2 text-xl font-medium text-blue-600">Your Information</p>
                        <input
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={myEmailValue}
                            onChange={(e) => setMyEmailValue(e.target.value)}
                            placeholder="myemail@gmail.com"
                        />
                        {myEmailValidateError && (
                            <p id="helper-text-explanation" className="p-1 flex text-sm text-gray-500">
                                <img className="w-3 opacity-50 h-3 m-1" src="error_icon.png" />
                                {myEmailValidateError}
                            </p>
                        )}

                        <input
                            type="text"
                            className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={myFirstNameValue}
                            onChange={(e) => setMyFirstNameValue(e.target.value)}
                            placeholder="First Name"
                        />
                        {myFirstNameValidateError && (
                            <p id="helper-text-explanation" className="p-1 flex text-sm text-gray-500">
                                <img className="w-3 opacity-50 h-3 m-1" src="error_icon.png" />
                                {myFirstNameValidateError}
                            </p>
                        )}

                        <input
                            type="text"
                            value={myLastNameValue}
                            onChange={(e) => setMyLastNameValue(e.target.value)}
                            className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Last Name"
                        />
                    </div>

                    <hr />

                    <div>
                        <p className="my-2 text-xl font-medium text-blue-600">Referee Information</p>
                        <input
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={refreeEmailValue}
                            onChange={(e) => setRefreeEmailValue(e.target.value)}
                            placeholder="referee@gmail.com"
                        />
                        {refreeEmailValidateError && (
                            <p id="helper-text-explanation" className="p-1 flex text-sm text-gray-500">
                                <img className="w-3 opacity-50 h-3 m-1" src="error_icon.png" />
                                {refreeEmailValidateError}
                            </p>
                        )}

                        <input
                            type="text"
                            className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={refreeFirstNameValue}
                            onChange={(e) => setRefreeFirstNameValue(e.target.value)}
                            placeholder="First Name"
                        />
                        {refreeFirstNameValidateError && (
                            <p id="helper-text-explanation" className="p-1 flex text-sm text-gray-500">
                                <img className="w-3 opacity-50 h-3 m-1" src="error_icon.png" />
                                {refreeFirstNameValidateError}
                            </p>
                        )}

                        <input
                            type="text"
                            className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={refreeLastNameValue}
                            onChange={(e) => setRefreeLastNameValue(e.target.value)}
                            placeholder="Last Name"
                        />
                    </div>
                    
                    {responseError && 
                        <div className="flex items-center p-4 mb-4 text-sm text-white rounded-lg bg-red-600" role="alert">
                            <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span className="sr-only">Info</span>
                            <div> 
                                {responseError}
                            </div>
                        </div>
                    }

                    {responseSuccess && 
                        <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                            <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <span className="sr-only">Info</span>
                            <div> 
                                {responseSuccess}
                            </div>
                        </div>
                    }


                    <div className="flex items-center justify-end"> 

                        <button
                            type="submit"
                            className={`inline-block rounded-lg px-5 py-3 text-sm font-medium text-white ${
                                isFormValid ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed"
                            }`}
                            disabled={!isFormValid}
                            onClick={handleSubmit}
                        >
                        {
                            isloading &&
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                        }

                        Create Referral
                        </button>
                    </div>
                </form> 
            </div>
        </div>
    );
};


export default RefralForm;