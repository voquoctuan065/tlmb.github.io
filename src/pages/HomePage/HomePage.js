import { Footer, Header } from '~/container';
import './homepage.css';
import BodyContainer from '~/container/bodyContainer/BodyContainer';

function HomePage() {
    return (
        <div>
            <div className="heading">
                <Header />
            </div>
            <div className="body-container">
                <div>
                    <BodyContainer />
                </div>
            </div>
            <div className="footing">
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
