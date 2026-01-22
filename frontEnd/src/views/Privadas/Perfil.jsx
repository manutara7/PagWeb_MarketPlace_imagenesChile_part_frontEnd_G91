// src/views/Privadas/Perfil.jsx

import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import { useState } from "react";
import PerfilInfo from "../../components/Privados/PerfilInfo";
import CrearPublicacion from "../../components/Privados/CrearPublicacion";
import MisPublicaciones from "../../components/Privados/MisPublicaciones";
import Carrito from "../../components/Privados/Carrito";
import Favoritos from "../../components/Privados/Favoritos";
import AccionModal from "../../components/Privados/AccionModal";



export default function Perfil() {
  const { user } = useContext(UserContext);

  const [seccion, setSeccion] = useState("perfil");
  const [foto, setFoto] = useState("https://i.pravatar.cc/150?img=12");
  const [perfil, setPerfil] = useState({
  nombre: user?.name || "",
  apellido: "",
  correo: user?.email || ""
  });
  const [showModal, setShowModal] = useState(false);
  const [mensaje, setMensaje] = useState("");


  
    if (!user) return <h2>Cargando...</h2>;

  const handleFoto = (e) => {
    const file = e.target.files[0];
    if (file) setFoto(URL.createObjectURL(file));
  };
  const mostrarModal = (texto) => {
  setMensaje(texto);
  setShowModal(true);
  };

  return (
    <div className="profile-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <label className="avatar-box">
          <img src={foto} alt="perfil" />
          <input type="file" hidden onChange={handleFoto} />
          <span>Cambiar foto</span>
        </label>

        {/* <h4 className="username">{nombre}</h4> */}
        <h4 className="username">{user?.name}</h4>

        <nav className="profile-nav">
          <button onClick={() => setSeccion("perfil")}>👤 Perfil</button>
          <button onClick={() => setSeccion("crear")}>➕ Crear publicación</button>
          <button onClick={() => setSeccion("mis")}>🗂 Mis publicaciones</button>
          <button onClick={() => setSeccion("carrito")}>🛒 Carrito</button>
          <button onClick={() => setSeccion("favoritos")}>❤️ Favoritos</button>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className="profile-main">
        
        {seccion === "perfil" && <PerfilInfo perfil={perfil} setPerfil={setPerfil} />}
        {seccion === "crear" && <CrearPublicacion />}
        {seccion === "carrito" && <Carrito />}
        {seccion === "favoritos" && <Favoritos />}
        <AccionModal
          show={showModal}
          onClose={() => setShowModal(false)}
          mensaje={mensaje}
        />
        {seccion === "mis" && <MisPublicaciones onAccion={mostrarModal} />}
      </main>
    </div>
  );
}
