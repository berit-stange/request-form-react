import logo from './stange-design-logo.svg';

import './css/styles.css';

function Header() {
  return (
    <header className="">

        <img src={logo} className="logo" alt="logo" />

    </header>
  );
}

export default Header;