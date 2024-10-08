import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Objectives from "../../components/Objectives";
import Projects from "../../components/Projects";
import Members from "../../components/Members";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import VLibras from "@djpfs/react-vlibras";

const Home = () => {
    return (
        <div className="grid">
            <ScrollToTopButton/>
            <section className="flex flex-col h-screen">
                <Navbar />
                <Header />
            </section>
            <Objectives />
            <Projects />
            <Members />
            <Footer />
        </div>
    )
}

export default Home;