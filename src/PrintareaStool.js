import './css/styles.css';
import './css/background-images.css';

function PrintareaStool() {
    return (
        <div className="products">

            <div className="product-grid">

                <a href="#" className="">
                    <div className="product-item hocker-maks"></div>
                    <p className="product-title">1 Seite bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item hocker-sitzwuerfel"></div>
                    <p className="product-title">2 Seiten bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item hocker-barhocker"> </div>
                    <p className="product-title">3 Seiten bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item stellwand-dino"> </div>
                    <p className="product-title">4 Seiten bis max. A4</p>
                </a>

                <a href="#">
                    <div className="product-item stellwand-dino"> </div>
                    <p className="product-title">komplett bedruckt</p>
                </a>

            </div>

        </div>
    );
}

export default PrintareaStool;