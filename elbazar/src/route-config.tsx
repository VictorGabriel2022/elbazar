import ComponenteActualizarCategoria from "./categoria/ComponenteActualizarCategoria";
import ComponenteListaCategoria from "./categoria/ComponenteListaCategoria.tsx";
import ComponenteRegistrarCategoria from "./categoria/ComponenteRegistrarCategoria";
import ComponentePrincipal from "./principal/ComponentePrincipal";
import ComponenteListaDetalleproducto from "./detallepedido/ComponenteListaDetalleproducto";
import ComponenteListaProducto from "./producto/ComponenteListaProducto";
import ComponenteListaPedido from "./pedido/ComponenteListaPedido"
import ComponenteListaCliente from "./cliente/ComponenteListaCliente";
import ComponenteRegistrarProducto from "./producto/ComponenteRegistrarProducto";
import ComponenteRegistrarCliente from "./cliente/ComponenteRegistrarCliente";
import ComponenteRegistrarPedido from "./pedido/ComponenteRegistrarPedido";
import ComponenteRegistrarDPedido from "./detallepedido/ComponenteRegistrarDetallepedido";
import ComponenteActualizarCliente from "./cliente/ComponenteActualizarCliente";
import ComponenteActualizarProducto from "./producto/ComponenteActualizarProducto";
import ComponenteActualizarPedido from "./pedido/ComponenteActualizarPedido";
import ComponenteActualizarDetallepedido from "./detallepedido/ComponenteActualizarDetalleproducto";


const rutas=[
{path:'/',componente:ComponentePrincipal},
{path:'/categoria/registrar',componente:ComponenteRegistrarCategoria},
{path:'/producto/registrar',componente:ComponenteRegistrarProducto},
{path:'/cliente/registrar',componente:ComponenteRegistrarCliente},
{path:'/pedido/registrar',componente:ComponenteRegistrarPedido},
{path:'/categoria',componente:ComponenteListaCategoria},
{path:'/categoria/actualizar/:id',componente:ComponenteActualizarCategoria},
{path:'/producto/registrar',componente:ComponenteRegistrarProducto},
{path:'/producto',componente:ComponenteListaProducto},
{path:'/producto/actualizar/:id',componente:ComponenteActualizarProducto},
{path:'/detalleproducto',componente:ComponenteListaDetalleproducto},
{path:'/pedido',componente:ComponenteListaPedido},
{path:'/cliente',componente:ComponenteListaCliente},
{path:'/detalleproducto/registrar',componente:ComponenteRegistrarDPedido},
{path:'/cliente/actualizar/:id',componente:ComponenteActualizarCliente},
{path:'/producto/actualizar/:id',componente:ComponenteActualizarProducto},
{path:'/pedido/actualizar/:id',componente:ComponenteActualizarPedido},
{path:'/detalleproducto/actualizar/:id',componente:ComponenteActualizarDetallepedido},




// creando un path para rutas no encontradas, esto siempre va al final

];

export default rutas;