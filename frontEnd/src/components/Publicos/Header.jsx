// src/components/Publicos/Header.jsx

import logo from "../../assets/img/imgHeader.png";

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        alt="logo"
        style={{ width: "90%", height: "auto", }}
      />
    </header>
  );
};

export default Header;

