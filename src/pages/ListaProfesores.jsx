import TarjetaUsuario from '../componentes/TarjetaUsuario'
import Encabezado from '../componentes/Encabezado'

const ListaProfesores = () => {
    return (
        <>
            <Encabezado />
            <div className='contenedorPrincipal'>
                <TarjetaUsuario nombre="Arturo Calle" />
                <TarjetaUsuario nombre="Juan Jose de la Cruz" />
                <TarjetaUsuario nombre="Sebastian Rodriguez" />
                <TarjetaUsuario nombre="Laura Capacho" />
            </div>
        </>

    )
}

export default ListaProfesores;