import { useNavigate } from "react-router-dom";

const TarjetaUsuario = ({ usuario })=> {
    let redireccion = useNavigate();
    return(
        <div className="contenedorUsuario">
            <h2 className="nombreUsuario">{ usuario.nombre }</h2>
            <button className="btn" onClick={() => redireccion(`/usuario/${usuario.id}`, { state: usuario })}>VER MAS</button>
        </div>
    )
}
export default TarjetaUsuario;