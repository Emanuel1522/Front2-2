import TarjetaUsuario from '../componentes/TarjetaUsuario'
import Encabezado from '../componentes/Encabezado'
import { estudiantes } from "../services/database";

const ListaEstudiantes = () => {
    return (
        <>
            <Encabezado />
            <div className='contenedorPrincipal'>
                <div>
                    <h1>ESTUDIANTES</h1>
                </div>
                <div className='contenedorLista'>
                {estudiantes.map((estudiante) => (
                    <TarjetaUsuario 
                        key={estudiante.id} 
                        usuario={estudiante}
                    />
                ))}
                </div>
            </div>
        </>
    )
}

export default ListaEstudiantes;