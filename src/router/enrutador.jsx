import Formulario from "../pages/Formulario";
import ListaProfesores from "../pages/ListaProfesores";
import ListaEstudiantes from "../pages/ListaEstudiantes";
import Usuario from "../pages/Usuario"

export let enrutador = [
    {
        path: "/",
        element: <Formulario />,
      },
    {
      path: "/listaEstudiantes",
      element: <ListaEstudiantes />,
    },
    {
      path: "/listaProfesores",
      element: <ListaProfesores />,
    },
    {
        path: "/usuario/:nombre",
        element: <Usuario />,
      },
  ];
  