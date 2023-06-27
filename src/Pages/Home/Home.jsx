import Navbar from "../../components/Navbar/Navbar";
import DashBoard from "../../components/DashBoard/DashBoard";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import Benifits from "../../components/Benifits/Benifits";
import Testimonial from "../../components/Testimonial/Testimonial";
import Companies from "../../components/Companies/companies";

export default function Home (){
    return(
        <>    <Navbar />
    <DashBoard/>
    <About/>
    <Benifits/>
    <Testimonial/>
    <Companies/>
    <Footer/>
    </>

        
    )
}