import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PedidoDTO } from "./pedido.model";

export default function ComponenteListaPedido(){
  const url = "https://localhost:44394/Proyecto_EC1/pedido";
  
  const [Pedido, setPedido] = useState<PedidoDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setPedido(response.data);
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
            <h1>Lista Pedido</h1>
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
  <thead className="table-dark">
    <tr>
      <th scope="col">Codigo</th>
      <th scope="col">Codigo Cliente</th>
      <th scope="col">Fecha de Pedido</th>
      <th scope="col">Hora de Pedido</th>
      <th scope="col">Fecha de Entrega</th> 
      <th scope="col">Observaciones</th>
      <th scope="col">Estado</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {Pedido?.map((ped)=>(
  <tr key={ped.id_pedido}>
      <th scope="row">{ped.id_pedido}</th>
      <td>{ped.id_Cliente}</td>
      <td>{ped.fech_ped}</td>
      <td>{ped.hor_ped}</td>
      <td>{ped.fech_entr}</td>
      <td>{ped.obs}</td>
      <td>{ped.estado?<td>Habilitado</td> : <td>Deshabilitado</td>}</td>
      <td><a href="#" className="btn btn-success">Actualizar</a></td>
      <td><a href="#" className="btn btn-danger">Eliminar</a></td>
    </tr>
    ))}
  </tbody>
</table>

            </div>
            
            <a href="libros/registrar" className="btn btn-primary">Registrar Libro</a>
        </div>
    );

  }