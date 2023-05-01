import '../Style/About.css'
import Header from "../Layout/Header";
import Main from "../Layout/Main";
import Footer from '../Layout/Footer';
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Collapse from "../Components/Collapse";


function About() {
    return(
        <div className="about">
            <Header>
                <Navbar />
            </Header>

            <Main>
                <Banner />

                <section className="Partie-collapse">
                    <Collapse title="Fiabilité"  content="ddf" />
                    <Collapse title="Respect"  content="fffqf" />
                    <Collapse title="Service"  content="egrer" />
                    <Collapse title="Sécurité"  content="htht" />

                </section>
            </Main>

            <Footer /> 
        </div>
    )
}

export default About;