import ComponentePrincipal from "./principal/ComponentePrincipal";
import ComponenteListaProducto from "./producto/ComponenteListaProducto";
import ComponenteListaPedido from "./pedido/ComponenteListaPedido"

const rutas=[
    {path:'/',componente:ComponentePrincipal},
    {path:'/producto',componente:ComponenteListaProducto},
    {path:'/pedido',componente:ComponenteListaPedido}
];

export default rutas;