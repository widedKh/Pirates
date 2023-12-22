import AllPirates from './components/AllPirates';
import AddPirate from './components/AddPirate';
import ViewPirate from './components/ViewPirate';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
           <Routes>
               <Route path="/" element={<Navigate to="/pirates" />} />
               <Route  path="/pirates" element={<AllPirates />}/>
               <Route path="/pirate/new" element={<AddPirate/>} />
              <Route path="/pirate/:id" element={<ViewPirate/>} /> 
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
