import ComponenteActualizarCategoria from "./categoria/ComponenteActualizarCategoria";
import ComponenteListaCategoria from "./categoria/ComponenteListaCategoria.tsx";
import ComponenteRegistrarCategoria from "./categoria/ComponenteRegistrarCategoria";
import ComponentePrincipal from "./principal/ComponentePrincipal";
import ComponenteListaDetalleproducto from "./detallepedido/ComponenteListaDetalleproducto";
import ComponenteListaProducto from "./producto/ComponenteListaProducto";
import ComponenteListaPedido from "./pedido/ComponenteListaPedido"
import ComponenteListaCliente from "./cliente/ComponenteListaCliente";
import ComponenteListaempleado from "./empleado/ComponenteListaempleado";
import ComponenteRegistrarProducto from "./producto/ComponenteRegistrarProducto";
import ComponenteRegistrarCliente from "./cliente/ComponenteRegistrarCliente";
import ComponenteRegistrarPedido from "./pedido/ComponenteRegistrarPedido";


const rutas=[
{path:'/',componente:ComponentePrincipal},
{path:'/categoria/registrar',componente:ComponenteRegistrarCategoria},
{path:'/producto/registrar',componente:ComponenteRegistrarProducto},
{path:'/cliente/registrar',componente:ComponenteRegistrarCliente},
{path:'/pedido/registrar',componente:ComponenteRegistrarPedido},
{path:'/categoria',componente:ComponenteListaCategoria},
{path:'/categoria/actualizar/:id',componente:ComponenteActualizarCategoria},
{path:'/producto',componente:ComponenteListaProducto},
{path:'/detalleproducto',componente:ComponenteListaDetalleproducto},
{path:'/pedido',componente:ComponenteListaPedido},
{path:'/cliente',componente:ComponenteListaCliente},
{path:'/empleado',componente:ComponenteListaempleado}


// creando un path para rutas no encontradas, esto siempre va al final

];

export default rutas;