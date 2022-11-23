export default function ComponenteMenu(){
    return(
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
 
  <a className="navbar-brand" href="/">El bazar del Optometrista</a>

 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/producto">Producto</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/categoria">Categoria</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/cliente">Cliente</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/empleado">Empleado</a>
      </li>
      <li className="nav-item">
       <a className="nav-link" href="/pedido">Pedido</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/detalleproducto">Detalle Pedido</a>
      </li>
 
    </ul>
  </div>
</nav>
    )
}