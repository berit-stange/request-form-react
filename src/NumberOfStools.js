import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';

function NumberOfStools() {
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
                <p className="erklaerung">Je nach Stückzahl und Produkt entscheiden wir,
                    ob mit Sieb- oder Digitaldruck produziert wird.</p>
                {/* <p className="erklaerung">
                    Wenn Sie noch nicht sicher sind, weil noch nicht alles geklärt ist, wählen Sie eine Stückzahl,
                    die dem Ziel am nächsten ist.
                </p> */}
            </div>

            <form className="number-input-box">
                <input className="number-input"></input>
            </form>

            <Link to="/anfrage/customer-data">
                <div className="button-weiter">
                    <p className="">weiter</p>
                </div>
            </Link>

        </div>
    );
}

export default NumberOfStools;