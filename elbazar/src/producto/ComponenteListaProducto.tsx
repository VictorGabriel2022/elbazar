export default function ComponenteListaProducto(){
    return(
        <div>
            <h1>Lista de Productos</h1>
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
  <thead className="table-dark">
    <tr>
      <th scope="col">Código</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripción</th>
      <th scope="col">Precio</th>
      <th scope="col">Stock</th>
      <th scope="col">Categoría</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">L01</th>
      <td>Lentes para niños</td>
      <td>Lentes con sujetador diseñados para que no se caigan</td>
      <td>180 S/.</td>
      <td>10</td>
      <td>Niños</td>
      <td><a href="#" className="btn btn-success">Actualizar</a></td>
      <td><a href="#" className="btn btn-danger">Eliminar</a></td>
    </tr>
    
  </tbody>
</table>

            </div>
            
            <a href="producto/registrar" className="btn btn-primary">Registrar produto</a>
        </div>
       );
    
}