import './css/styles.css';
import './css/background-images.css';
import { Link } from 'react-router-dom';

function NumberOfWalls() {
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
                </div>
            </div>

            <div>
                <p className="erklaerung">Je nach Stückzahl und Produkt entscheiden wir,
                    wie produziert wird.</p>
            </div>

            <form className="number-input-box">
                <input className="number-input"></input>
            </form>

            <Link to="/customer-data">
                <div className="button-weiter">
                    <p className="">weiter</p>
                </div>
            </Link>


        </div>
    );
}

export default NumberOfWalls;