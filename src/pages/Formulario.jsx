import "./Formulario.css";

function Formulario() {
  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form className="form">
        <div className="form_front">
          <div className="form_details">Buscar estudiante</div>
          <input
            type="text"
            className="input"
            placeholder="NOMBRE"
          />
          <button type="button" className="btn">
            Buscar
          </button>
          <span className="switch">
            <label for="signup_toggle" className="signup_tog">
            BUSCAR PROFESOR Aqui
            </label>
          </span>
        </div>
        <div className="form_back">
          <div className="form_details">Buscar profesor</div>
          <input
            type="text"
            className="input"
            placeholder="NOMBRE"
          />
          <button type="button" className="btn">
            Buscar
          </button>
          <span className="switch">
            <label for="signup_toggle" className="signup_tog">
            BUSCAR ESTUDIANTE Aqui
            </label>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
