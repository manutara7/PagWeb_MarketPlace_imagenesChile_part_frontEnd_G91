//src/components/Privados/Favoritos.jsx

import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Favoritos = () => {
  const { favoritos, removeFavorito } = useContext(UserContext);

  if (!favoritos || favoritos.length === 0) {
    return <h4>No tienes favoritos aún ❤️</h4>;
  }

  return (
    <div>
      <h3>Mis Favoritos ❤️</h3>

      <div className="row g-3">
        {favoritos.map((img) => (
          <div key={img.id} className="col-md-3">
            <div className="card position-relative">

              {/* BOTÓN QUITAR FAVORITO */}
              <button
                className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                onClick={() => removeFavorito(img.id)}
                title="Quitar de favoritos"
              >
                ❌
              </button>

              <img src={img.img} className="card-img-top" alt={img.title} />

              <div className="card-body">
                <h6>{img.title}</h6>
                <p className="fw-bold">
                  ${img.price.toLocaleString("es-CL")}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;



