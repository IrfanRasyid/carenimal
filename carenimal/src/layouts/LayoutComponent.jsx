import PropTypes from 'prop-types';
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

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;