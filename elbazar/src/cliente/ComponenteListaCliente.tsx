import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClienteDTO } from "./cliente.model";

export default function ComponenteListaCliente(){
  const url = "https://localhost:44394/Proyecto_EC1/cliente";
  
  const [Cliente, setCliente] = useState<ClienteDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setCliente(response.data);
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
            <h1>Lista de CLientes</h1>
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                  <tr>
                      <th scope="col">Código</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Fecha de Nacimiento</th>
                      <th scope="col">Documento</th>
                      <th scope="col">Estado</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {Cliente?.map((cli)=>(
               <tr key={cli.id_Cliente}>
                  <th scope="row">{cli.id_Cliente}</th>
                  <td>{cli.nombre}</td>
                  <td>{cli.apellido}</td>
                  <td>{cli.fech_nac}</td>
                  <td>{cli.tip_doc}</td>
                  <td>{cli.estado}</td>
                  
                  <td><a  href=""
                  className="btn btn-success">Actualizar</a></td>
                  <td><a href="#" className="btn btn-danger">Eliminar</a></td>
               </tr>
   ))}
    
  
  
  </tbody>
</table>

            </div>
            
            <a href="" className="btn btn-primary">Registrar Cliente</a>
        </div>
    );

}