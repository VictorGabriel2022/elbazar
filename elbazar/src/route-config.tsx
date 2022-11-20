import ComponentePrincipal from "./principal/ComponentePrincipal";
import ComponenteListaProducto from "./producto/ComponenteListaProducto";

const rutas=[
    {path:'/',componente:ComponentePrincipal},
    {path:'/producto',componente:ComponenteListaProducto},
];

export default rutas;