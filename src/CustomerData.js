import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';

function CustomerData() {
    return (
        <div className="products">

            <div className="progress">
                <div className='line'></div>
                <div className='button-box'>
                    <button className="button-progress active" onClick={() => { }} >1</button>
                    <button className="button-progress active" onClick={() => { }} >2</button>
                    <button className="button-progress active" onClick={() => { }} >3</button>
                    <button className="button-progress active" onClick={() => { }} >4</button>
                    <button className="button-progress" onClick={() => { }} >5</button>
                    <button className="button-progress" onClick={() => { }} >6</button>
                </div>
            </div>

            <div>
                <p className="erklaerung">Zwischen Abgabe der Druckdaten bis Lieferung müssen 3 Wochen Zeit sein.</p>
            </div>

            <form className="data-input-box">
                <input className="number-input"></input>
            </form>

            <div>
                <p className="erklaerung">Wohin soll geliefert werden? <br></br>
                    Wir benötigen mindestens eine Postleitzahl,
                    um den Transport berechnen zu können</p>
            </div>

            <form className="data-input-box">
                <input className="number-input"></input>
            </form>


            <Link to="/anfrage/customer-data">
                <div className="button-weiter">
                    <p className="">Anfrage abschicken</p>
                </div>
            </Link>

        </div>
    );
}

export default CustomerData;