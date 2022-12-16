import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CategoriaDTO } from "./categoria.model";

export default function ComponenteListaCategoria(){
  const url = "https://localhost:44394/Proyecto_EC1/categoria";
  
  const [Categoria, setCategoria] = useState<CategoriaDTO[]>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url)
      .then((response) => {
        setCategoria(response.data);
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
            <h1>Lista de Categoria</h1>
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                  <tr>
                      <th scope="col">Código</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Estado</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {Categoria?.map((catg)=>(
               <tr key={catg.id_catg}>
                  <th scope="row">{catg.id_catg}</th>
                  <td>{catg.nom_catg}</td>
                  <td>{catg.estado?<td>Habilitado</td> : <td>Deshabilitado</td>}</td>
                  <td>
                  <Link
                    to={`/categoria/actualizar/${catg.id_catg}`}
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
            
            <a href="categoria/registrar" className="btn btn-primary">Registrar Categoria</a>
        </div>
    );

}