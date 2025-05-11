import Encabezado from '../componentes/Encabezado'
import { useLocation } from "react-router-dom";
import './Usuario.css'

const Usuario = () => {
    const location = useLocation();
    const usuario = location.state || JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
        return <div>Usuario no encontrado</div>;
    }

    return (
        <main>
            <Encabezado />
            <div className="contenedorInformacion">
                <section>
                    <h2>{ usuario.nombre }</h2>
                    <div className='imagenContenedor'>
                    <img src={`/${usuario.imagen}`} alt={usuario.nombre} />
                    </div>
                </section>
                <section>
                    <h2>Informacion principal</h2>
                    <p>{ usuario.info }</p>
                </section> 
            </div>
        </main>
    )
}
export default Usuario;