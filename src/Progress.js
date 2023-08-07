import './css/styles.css';
import { BrowserRouter as Router, Route, Redirect, BrowserHistory, useNavigate } from "react-router-dom"; // for goBack() ? 


function Progress() {



  return (
    <div className="progress">

      <div className='line'></div>

      <div className='button-box'>
        <button className="button-progress" onClick={() => { }} >1</button>
        <button className="button-progress" onClick={() => { }} >2</button>
        <button className="button-progress" onClick={() => { }} >3</button>
        <button className="button-progress" onClick={() => { }} >4</button>
        <button className="button-progress" onClick={() => { }} >5</button>
        <button className="button-progress" onClick={() => { }} >6</button>
      </div>

    </div>
  );
}

export default Progress;