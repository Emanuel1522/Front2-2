import Encabezado from '../componentes/Encabezado'
import imagen from '../assets/persona.jpg'
import './Usuario.css'

const Usuario = ({ nombre }) => {
    return (
        <main>
            <Encabezado />
            <div className="contenedorInformacion">
                <section>
                    <h2>{ nombre }</h2>
                    <div className='imagenContenedor'>
                        <img src={imagen} alt="Persona"/>
                    </div>
                </section>
                <section>
                    <h2>Informacion principal</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet culpa architecto beatae? Architecto numquam saepe veniam amet nisi asperiores autem voluptatem placeat totam officiis debitis inventore, voluptatibus necessitatibus voluptates? Dolore.</p>
                </section>
            </div>
        </main>
    )
}
export default Usuario;