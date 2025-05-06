
const TarjetaUsuario = ({ nombre })=> {
    return(
        <div className="contenedorUsuario">
            <h2 className="nombreUsuario">{nombre}</h2>
            <button className="btcVerMas">VER MAS</button>
        </div>
    )
}
export default TarjetaUsuario;