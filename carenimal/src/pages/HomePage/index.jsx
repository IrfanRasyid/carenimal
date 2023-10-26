import Header from "../../components/Header/HeaderComponent";
import Footer from "../../components/Footer/FooterComponent";
import BannerImage from "../../assets/img/image1.png";
import Card from "../../components/Card/Card";

function HomePage() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="text-center hero-content">
                <div className="w-auto">
                <img src={BannerImage} alt="Cute cat" />
                </div>
                <div className="container xs={1} md={2} lg={4} g-4" >
                    <Card />
                </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;