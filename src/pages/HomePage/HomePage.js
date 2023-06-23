import { Footer, Header } from '~/container';
import './homepage.css';
import PropTypes from 'prop-types';
import BorderContainer from '~/container/bodyContainer/BodyContainer';

function HomePage({ children }) {
    return (
        <div>
            <div className="heading heading-top-sticky">
                <Header />
            </div>
            <div className="body-container">
                <div>
                    <BorderContainer />
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
