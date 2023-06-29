import 'bootstrap/dist/css/bootstrap.min.css';

import './product.css';
import { Footer, Header } from '~/container';

function ProductPage({ children }) {
    return (
        <div>
            <div className="heading">
                <Header />
            </div>

            <div className="product-container">
                <div className="container">{children}</div>
            </div>

            <div className="footing">
                <Footer />
            </div>
        </div>
    );
}

export default ProductPage;
