import { Footer, Header } from '~/container';
import './homepage.css';
import BorderContainer from '~/container/bodyContainer/BodyContainer';

function HomePage() {
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

export default HomePage;
