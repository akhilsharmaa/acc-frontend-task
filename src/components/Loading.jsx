const Loading = () => {
    return ( 
        <div className="fixed top-0 right-0 left-0 right-0 z-20 p-0 m-0 h-screen w-screen bg-gray-300">
                <div className="flex flex-row min-h-screen justify-center items-center">
                    <div className="animate-spin inline-block size-16 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <p className="m-10 text-2xl">
                        Creating Refral...
                    </p>
                </div>
        </div>
    );
};

export default Loading;