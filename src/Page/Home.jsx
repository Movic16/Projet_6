import Header from "../Layout/Header";
import Navbar from "../Components/Navbar";
import Main from "../Layout/Main";
import Banner from "../Components/Banner";


function Home() 
{
    return (
        <div>
            <Header>
                <Navbar />
            </Header>

            <Main>
                <Banner />
            </Main>
        </div>
    )
}

export default Home;