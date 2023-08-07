import './css/styles.css';
import './css/background-images.css';

function PrintareaBarhocker() {
    return (
        <div className="products">

            <div className="progress">
                <div className='line'></div>
                <div className='button-box'>
                    <button className="button-progress active" onClick={() => { }} >1</button>
                    <button className="button-progress active" onClick={() => { }} >2</button>
                    <button className="button-progress" onClick={() => { }} >3</button>
                    <button className="button-progress" onClick={() => { }} >4</button>
                    <button className="button-progress" onClick={() => { }} >5</button>
                    <button className="button-progress" onClick={() => { }} >6</button>
                </div>
            </div>

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
                    <div className="product-item hocker-barhocker-3"></div>
                    <p className="product-title">komplett bedruckt</p>
                </a>

            </div>

        </div>
    );
}

export default PrintareaBarhocker;