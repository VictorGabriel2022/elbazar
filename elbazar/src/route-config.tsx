import ComponenteListaDetalleproducto from "./detallepedido/ComponenteListaDetalleproducto";
import ComponentePrincipal from "./principal/ComponentePrincipal";
import ComponenteListaProducto from "./producto/ComponenteListaProducto";

const rutas=[
    {path:'/',componente:ComponentePrincipal},
    {path:'/producto',componente:ComponenteListaProducto},
    {path:'/detalleproducto',componente:ComponenteListaDetalleproducto},
];

export default rutas;