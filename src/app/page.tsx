import Image from "next/image";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Editor from "./components/Editor";
import Footer from "./components/Footer";
import BestSeller from "./components/BestSeller";
import Vita from "./components/Vita";
import Universe from "./components/Universe";
import Featured from "./components/Featured";

export default function Home() {
  return (
   
<div> 
  <TopHeader/>
  <Header/>
  <Hero />
  <Editor/>
  <BestSeller />
  <Vita />
  <Universe />
  <Featured />
  <Footer/>
  


</div>
      
        
     
     
  );
}
