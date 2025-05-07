const Encabezado = () => {
    return(
        <header>
            <div className="contenidoEncabezado">
                <h2> COLEGIO DE PEPITO </h2>
                <nav>
                    <ul className="listaOpciones">
                        <li className="opciones"> <button>Buscar</button> </li>
                        <li className="opciones"> <button>Lista</button> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Encabezado;