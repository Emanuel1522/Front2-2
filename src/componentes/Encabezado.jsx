import { useNavigate } from "react-router-dom";

const Encabezado = () => {
    let redireccion = useNavigate();

    return(
        <header>
            <div className="contenidoEncabezado">
                <h2> COLEGIO DE PEPITO </h2>
                <nav>
                    <ul className="listaOpciones">
                        <li className="opciones" onClick={() => redireccion("/")}> <button>Buscar</button> </li>
                        <li className="opciones" onClick={() => redireccion("/listaEstudiantes")}> <button>Lista de estudiantes</button> </li>
                        <li className="opciones" onClick={() => redireccion("/listaProfesores")}> <button>Lista de profesores</button> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Encabezado;