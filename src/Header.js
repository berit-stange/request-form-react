import logo from './stange-design-logo.svg';

import './css/styles.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="">

      <Link to="/anfrage/">
        <img src={logo} className="logo" alt="logo" />
      </Link>



    </header>
  );
}

export default Header;