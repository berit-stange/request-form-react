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
                <p className="erklaerung">Wählen Sie die Farben aus. Je nach Stückzahl und Produkt entscheiden wir,
                    ob mit Sieb- oder Digitaldruck produziert wird.</p>
                {/* <p className="erklaerung">
                    Wenn Sie noch nicht sicher sind, weil noch nicht alles geklärt ist, wählen Sie eine Stückzahl,
                    die dem Ziel am nächsten ist.
                </p> */}
            </div>

            <form className="number-input">
                <input></input>
            </form>

            {/* <div className="number-grid">

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">50</p>
                    </div>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">100</p>
                    </div>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">150</p>
                    </div>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">175</p>
                    </div>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">200</p>
                    </div>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">225</p>
                    </div>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">250</p>
                    </div>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">375</p>
                    </div>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">400</p>
                    </div>
                </Link>

                <Link to="/anfrage/number-of-stools">
                    <div className="number">
                        <p className="">450</p>
                    </div>
                </Link>

            </div> */}

        </div>
    );
}

export default NumberOfStools;