//src/components/Publicos/AvisoLogin.jsx

import { useNavigate } from "react-router-dom";

const AvisoLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow text-center">
        <h2 className="mb-3">✅ Registro exitoso</h2>

        <p className="mb-4">
          Tu cuenta fue creada correctamente.<br />
          Para poder <strong>publicar imágenes</strong>, <strong>agregar a favoritos</strong> y
          <strong> usar el carrito</strong>, debes iniciar sesión.
        </p>

        <button
          className="btn btn-warning fw-bold"
          onClick={() => navigate("/login")}
        >
          🔐 Ir a iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default AvisoLogin;
