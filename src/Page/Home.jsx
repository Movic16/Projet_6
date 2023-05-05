import Header from "../Layout/Header";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";
import Banner from "../Components/Banner";
import Apparts from "../Components/Apparts";
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
                <Apparts />
            </Main>

            <Footer />
        </>
    )
}

export default Home;