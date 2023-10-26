import HeaderComponent from "../components/Header/HeaderComponent";
import FooterComponent from "../components/Footer/FooterComponent";

function LayoutComponent({ children }) {
    return (
        <div>
            <HeaderComponent />
            <main>
            {children}
            </main>
            <FooterComponent />
        </div>
    );
}

export default LayoutComponent;