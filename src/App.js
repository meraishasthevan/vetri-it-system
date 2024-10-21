import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import CardSection from "./components/card/CardSection";
import CardProcess from "./components/card/CardProcess";
import Troop from "./components/card/Troop";
import Footer from "./components/footer/Footer";
import { Routes, Route } from 'react-router-dom'; 
import Development from "./components/development/Development";
import Serve from "./components/development/Serve";
import Static from "./components/development/Static";

function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
         <Route  path="/" element={
            <>
                <Header/>
                <Main/>
                <CardSection/>
                <CardProcess/>
                <Troop/>
                <Footer/>
            </>
         }/>
       <Route path="development" element={<> <Development /><Serve /><Static/> </>} />

       

       </Routes>
     
    </div>
  );
}

export default App;
