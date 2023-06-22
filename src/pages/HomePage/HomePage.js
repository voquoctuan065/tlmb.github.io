import { Footer, Header } from '~/container';
import './homepage.css';
import WideNave from '~/container/widenav/WideNav';
import Content from '~/component/content/Content';
import PropTypes from 'prop-types';

function HomePage({ children }) {
    return (
        <div>
            <div className="heading heading-top-sticky">
                <Header />
            </div>
            <div className="body-container">
                <div className="wide-nave-wrapper">
                    <WideNave />
                </div>
                <div>
                    <Content />
                </div>
            </div>
            <div className="footing">
                <Footer />
            </div>
        </div>
    );
}

HomePage.propTypes = {
    children: PropTypes.node,
};

export default HomePage;
