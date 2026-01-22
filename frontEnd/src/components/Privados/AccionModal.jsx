//src/components/Privados/AccionModal.jsx

const AccionModal = ({ show, mensaje, onClose }) => {
  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal} className="shadow">

        <h4 className="mb-2">✅ Listo</h4>
        <p>{mensaje}</p>

        <button className="btn btn-primary mt-2" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999
  },
  modal: {
    background: "#fff",
    padding: "25px",
    borderRadius: "14px",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center"
  }
};

export default AccionModal;
