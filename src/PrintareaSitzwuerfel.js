import './css/styles.css';
import './css/background-images.css';

function PrintareaSitzwuerfel() {
    return (
        <div className="products">

            <div className="product-grid">

                <a href="#" className="">
                    <div className="product-item hocker-sitzwuerfel-1"></div>
                    <p className="product-title">1 Seite mit Logo bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item hocker-sitzwuerfel-2"></div>
                    <p className="product-title">2 Seiten mit Logo bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item hocker-sitzwuerfel-4"></div>
                    <p className="product-title">4 Seiten mit Logo bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item hocker-sitzwuerfel-komplett"></div>
                    <p className="product-title">komplett bedruckt</p>
                </a>

            </div>

        </div>
    );
}

export default PrintareaSitzwuerfel;