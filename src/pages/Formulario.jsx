import { useState } from "react";
import {
  estudiantes,
  profesores
  } from "../services/database";
import {
  alertaRedireccion,
  alertaError
} from "../helpers/funciones";
import "./Formulario.css";
import { useNavigate } from "react-router-dom";


function Formulario() {
  const [user, setUser] = useState("")
  let redireccion = useNavigate();

  
  function buscarUsuario(tipo) {
    if(tipo === "estudiante"){
      return estudiantes.find((estudiante) => estudiante.nombre.toLowerCase() === user.toLowerCase())
    } else if (tipo === "profesor"){
      return profesores.find((profesor) => profesor.nombre.toLowerCase() === user.toLowerCase());
    }
    return null;
  }


  function redirigirUsuario(tipo) {
    const usuario = buscarUsuario(tipo);
    if (usuario) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      alertaRedireccion(redireccion, "Usuario encontrado", `/usuario/${usuario.id}`,{ state: usuario });
    } else {
      alertaError();
    }
  }

  return (
    <div className="contenedorFormulario">
      <div className="container">
        <input id="signup_toggle" type="checkbox" />
        <form className="form">
          <div className="form_front">
            <div className="form_details">Buscar estudiante</div>
            <input
              onChange={(e) => setUser(e.target.value)}
              type="text"
              className="input"
              placeholder="NOMBRE"
            />
            <button type="button" onClick={() => redirigirUsuario("estudiante")} className="btn" >
              BUSCAR
            </button>
            <button type="button" onClick={() => redireccion("/listaEstudiantes")} className="btn"> VER LISTA </button>
            <span className="switch">
              <label for="signup_toggle" className="signup_tog">
              BUSCAR PROFESOR Aqui
              </label>
            </span>
          </div>
          <div className="form_back">
            <div className="form_details">Buscar profesor</div>
            <input
              onChange={(e) => setUser(e.target.value)}
              type="text"
              className="input"
              placeholder="NOMBRE"
            />
            <button type="button" onClick={() => redirigirUsuario("profesor")} className="btn">
              Buscar
            </button>
            <button type="button" onClick={() => redireccion("/listaProfesores")} className="btn"> VER LISTA </button>
            <span className="switch">
              <label for="signup_toggle" className="signup_tog">
              BUSCAR ESTUDIANTE Aqui
              </label>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
