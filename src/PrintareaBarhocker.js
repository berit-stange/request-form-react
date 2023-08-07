import './css/styles.css';
import './css/background-images.css';

function PrintareaBarhocker() {
    return (
        <div className="products">

            <div className="product-grid">

                <a href="#" className="">
                    <div className="product-item hocker-barhocker-1"></div>
                    <p className="product-title">1 Seite mit Logo bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item hocker-barhocker-2"></div>
                    <p className="product-title">2 Seiten mit Logo bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item hocker-barhocker-komplett"></div>
                    <p className="product-title">4 Seiten mit Logo bis max. A4</p>
                </a>

            </div>

        </div>
    );
}

export default PrintareaBarhocker;