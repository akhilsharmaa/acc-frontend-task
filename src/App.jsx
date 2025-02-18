import './App.css'
import Navbar from "./components/Navbar"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RefralForm from "../pages/RefralForm"
import Home from '../pages/home';  

const App = () => {
  // const [showDialog, setShowDialog] = useState(false); 

  return (
    <div >
      <Navbar /> 
      <div className='h-20' />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refer" element={<RefralForm />} /> 
        </Routes>
      </Router>

    </div>
  );
};

export default App
