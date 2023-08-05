import './css/styles.css';
import './css/background-images.css';

function PrintareaStool() {
    return (
        <div className="products">

            <div className="product-grid">

                <a href="#" className="">
                    <div className="product-item hocker-maks-1"></div>
                    <p className="product-title">1 Seite bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item hocker-maks-2"></div>
                    <p className="product-title">2 Seiten bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item hocker-maks-komplett"></div>
                    <p className="product-title">komplett bedruckt</p>
                </a>

            </div>

        </div>
    );
}

export default PrintareaStool;