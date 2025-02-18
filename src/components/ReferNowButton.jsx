import { useState } from "react";
import RefralForm from "./RefralForm";

const ReferNowButton = () => {
    const [showReferFrom, setShowReferFrom] = useState(false);

    return (
        <div >
            <button 
                type="button" 
                className="px-5 py-3 text-xl  text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setShowReferFrom(true)}
                >
                Refer Now
            </button>
            {showReferFrom && <RefralForm onClose={() => setShowReferFrom(false)} />}
        </div>
    );
};

export default ReferNowButton;
