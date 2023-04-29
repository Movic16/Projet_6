import Header from "../Layout/Header";
import Main from "../Layout/Main";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";


function About() {
    return(
        <div className="about">
            <Header>
                <Navbar />
            </Header>

            <Main>
                <Banner /> 
            </Main> 
        </div>
    )
}

export default About;