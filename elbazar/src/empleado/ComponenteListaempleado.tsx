import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { empleadoDTO } from "./empleado.model";


export default function ComponenteListaempleado(){
    const url = "https://localhost:44394/Proyecto_EC1/empleado";
  
  const [empleado, setempleado] = useState<empleadoDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setempleado(response.data);
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
            <h1>Lista de Empleados</h1>
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                  <tr>
                      <th scope="col">Idempleado</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Usuario</th>
                      <th scope="col">Contraseña</th>
                      <th scope="col">Estado</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {empleado?.map((empleado)=>(
               <tr key={empleado.Idempleado}>
                  <th scope="row">{empleado.Idempleado}</th>
                  <td>{empleado.Nombre}</td>
                  <td>{empleado.Apellido}</td>
                  <td>{empleado.Usuario}</td>
                  <td>{empleado.Contraseña}</td>
<<<<<<< Updated upstream
                  <td>{empleado.Estado}</td>
=======
                  <td>{empleado.Estado ?<td>Habilitado</td> : <td>Deshabilitado</td>}</td>
>>>>>>> Stashed changes
                  
                  <td><a  href=""
                  className="btn btn-success">Actualizar</a></td>
                  <td><a href="#" className="btn btn-danger">Eliminar</a></td>
               </tr>
   ))}
    
  
  
  </tbody>
</table>

            </div>
            
            <a href="" className="btn btn-primary">Registrar Empleados</a>
        </div>
      
    )
}