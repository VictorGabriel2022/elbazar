export default function ComponenteListaPedido(){
    return(
        <div>
            <h1>Lista Pedido</h1>
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
  <thead className="table-dark">
    <tr>
      <th scope="col">Codigo</th>
      <th scope="col">Codigo Cliente</th>
      <th scope="col">Fecha de Pedido</th>
      <th scope="col">Hora de Pedido</th>
      <th scope="col">Numero de Pedido</th>
      <th scope="col">Fecha de Entrega</th>
      <th scope="col">Estado</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">001</th>
      <td>005</td>
      <td>10/10/2022</td>
      <td>10:30 AM</td>
      <td>00001</td>
      <td>11/10/2022</td>
      <td>Entregado</td>
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