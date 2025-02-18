import { useState, useEffect } from "react";

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

                    <div className="flex items-center justify-end"> 

                        <button
                            type="submit"
                            className={`inline-block rounded-lg px-5 py-3 text-sm font-medium text-white ${
                                isFormValid ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed"
                            }`}
                            disabled={!isFormValid}
                        >
                            REFER NOW 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RefralForm;