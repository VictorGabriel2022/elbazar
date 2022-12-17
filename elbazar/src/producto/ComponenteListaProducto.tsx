import axios, { AxiosResponse } from "axios";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ProductoDTO } from "./producto.model";



export default function ComponenteListaProducto(){

  const url = "https://localhost:44394/Proyecto_EC1/producto";

 

  const [Producto, setProducto] = useState<ProductoDTO[]>();

  //se realiza la peticion al API por medio del axios

  const peticionesGet = async () => {

    await axios

      .get(url)

      .then((response) => {

        setProducto(response.data);

      })

      .catch((error) => {

        console.log(error);

      });

  };

  //se llama a la peticion

  useEffect(() => {

    peticionesGet();

  }, []);

    return(

        <div>

            <h1>Lista de Productos</h1>

            <div className="table-responsive">

            <table className="table table-hover table-bordered">

  <thead className="table-dark">

    <tr>

      <th scope="col">Código</th>

      <th scope="col">Nombre</th>

      <th scope="col">Precio</th>

      <th scope="col">Stock</th>

      <th scope="col">Id_Categoría</th>

      <th scope="col">Estado</th>

      <th scope="col"></th>

      <th scope="col"></th>

    </tr>

  </thead>

  <tbody>

  {Producto?.map((prod)=>(

  <tr key={prod.id_prod}>

      <th scope="row">{prod.id_prod}</th>

      <td>{prod.nomb_prod}</td>

      <td>{prod.prec_prod}</td>

      <td>{prod.stock_prod}</td>

      <td>{prod.id_catg}</td>

      <td>{prod.estado?<td>Habilitado</td> : <td>Deshabilitado</td> }</td>

      <td>
                  <Link
                    to={`/producto/actualizar/${prod.id_prod}`}
                    className="btn btn-success"
                  >
                    Actualizar
                  </Link>
                </td>

      <td><a href="#" className="btn btn-danger">Eliminar</a></td>

    </tr>

    ))}

   

  </tbody>

</table>



            </div>

           

            <a href="producto/registrar" className="btn btn-primary">Registrar produto</a>

        </div>

           );



          }

