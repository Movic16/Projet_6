import Header from "../Layout/Header";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";
import Banner from "../Components/Banner";
import Appart from "../Components/Appart";
import Navbar from "../Components/Navbar";

function Home() 
{
    return (
        <>
            <Header>
                <Navbar />
            </Header>

            <Main>
                <Banner />
                <Appart />
            </Main>

            <Footer />
        </>
    )
}

export default Home;