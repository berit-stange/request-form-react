import './css/styles.css';
import './css/background-images.css';

function PrintareaStellwandDino() {
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
                    <div className="product-item stellwand-dino-1"></div>
                    <p className="product-title">1 Seite / Mittelwand</p>
                </a>

                <a href="#">
                    <div className="product-item stellwand-dino-1-b"></div>
                    <p className="product-title">1 Seite mit Stützbeinen</p>
                </a>

                <a href="#" className="">
                    <div className="product-item stellwand-dino-2"></div>
                    <p className="product-title">2 Seiten / Mittelwand</p>
                </a>

                <a href="#" className="">
                    <div className="product-item stellwand-dino-2-b"></div>
                    <p className="product-title">2 Seiten mit Stützbeinen</p>
                </a>

            </div>

        </div>
    );
}

export default PrintareaStellwandDino; 