import TarjetaUsuario from '../componentes/TarjetaUsuario'
import Encabezado from '../componentes/Encabezado'

const ListaEstudiantes = () => {
    return (
        <>
            <Encabezado />
            <div className='contenedorPrincipal'>
                <TarjetaUsuario nombre="Emanuel Rojas" />
                <TarjetaUsuario nombre="Jeanpierry Moreno" />
                <TarjetaUsuario nombre="Juan de Dios" />
                <TarjetaUsuario nombre="Camila Sanchez" />
            </div>
        </>

    )
}

export default ListaEstudiantes;