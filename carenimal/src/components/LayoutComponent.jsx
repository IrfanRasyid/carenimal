import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./footer/FooterComponent";

function LayoutComponent(props) {
    return (
        <div className="container mx-auto">
            <HeaderComponent />
            {props.children}
            <FooterComponent />
        </div>
    );
}

export default LayoutComponent;