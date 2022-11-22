export default function ComponenteListaDetalleproducto(){
    return(
        <div>
            <h1>Lista Detalle Pedido</h1>
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
  <thead className="table-dark">
    <tr>
      <th scope="col">Código</th>
      <th scope="col">Código Producto</th>
      <th scope="col">Producto</th>
      <th scope="col">Estado</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Sub Total</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">001</th>
      <td>LOO1</td>
      <td>Lentes de Sol</td>
      <td>Activo</td>
      <td>10</td>
      <td>30</td>
      <td>300</td>
      <td><a href="#" className="btn btn-success">Actualizar</a></td>
      <td><a href="#" className="btn btn-danger">Eliminar</a></td>
    </tr>

  </tbody>
</table>

            </div>
            
            <a href="libros/registrar" className="btn btn-primary">Registrar Libro</a>
        </div>
    );

}