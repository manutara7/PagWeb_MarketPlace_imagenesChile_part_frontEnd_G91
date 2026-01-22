// src/components/Publicos/Navbar.jsx

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import logoYaiyo from "../../assets/img/logoYaiyo.png"; 

const Navbar = () => {
  const { user, totalCantidad, totalPrecio } = useContext(UserContext);

  const setActiveclassName = ({ isActive }) =>
    isActive ? "nav-link nav-custom active" : "nav-link nav-custom";

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm fixed-top">
      <div className="container-fluid">

        {/* LOGO */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
          <img src={logoYaiyo} alt="Logo" className="rounded-circle" id="logoPag"/>
          <span className="fw-bold">YaIyo</span>
        </NavLink>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center align-items-center gap-3">

            <li className="nav-item">
              <NavLink to="/" className={setActiveclassName}>Home</NavLink>
            </li>

            {!user && (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className={setActiveclassName}>Registrarse</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/login" className={setActiveclassName}>Login</NavLink>
                </li>
              </>
            )}

            {user && (
              <>
                <li className="nav-item">
                  <NavLink to="/perfil" className={setActiveclassName}>Perfil</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/logout" className="nav-link nav-custom text-danger fw-bold">
                    Cerrar sesión
                  </NavLink>
                </li>
              </>
            )}

          </ul>
            {/* 🛒 CARRITO */}
            <div className="d-flex flex-column align-items-center ms-lg-3">

              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold">
                  🛒 {totalCantidad}
                </span>
                <span className="text-success fw-bold">
                  ${totalPrecio.toLocaleString("es-CL")}
                </span>
              </div>

                    <NavLink
                to="/perfil"
                state={{ seccion: "carrito" }}
                className={`btn btn-sm mt-1 w-100 ${
                  totalCantidad === 0 ? "btn-outline-secondary disabled" : "btn-outline-primary"
                }`}
              >
                Ver  Carrito
              </NavLink>
              

            </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;









































