import './App.css'
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DialogCard from "./components/DialogCard"; 

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div >
      <Navbar />
      <Hero />
      <button 
        className="fixed bottom-10 right-10 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={() => setShowDialog(true)}
      >
        Open Dialog
      </button>
      {showDialog && <DialogCard title="Hello!" message="This is a dialog message." onClose={() => setShowDialog(false)} />}
    </div>
  );
}; 

export default App
