import TarjetaUsuario from '../componentes/TarjetaUsuario'
import Encabezado from '../componentes/Encabezado'
import { profesores } from "../services/database";

const ListaProfesores = () => {
    return (
        <>
            <Encabezado />
            <div className='contenedorPrincipal'>
                <div>
                    <h1>PROFESORES</h1>
                </div>
                <div className='contenedorLista'>
                {profesores.map((profesor) => (
                    <TarjetaUsuario 
                        key={profesor.id} 
                        usuario={profesor} 
                    />
                ))}
                </div>
            </div>
        </>

    )
}

export default ListaProfesores;