import axios from "axios";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { CategoriaDTO } from "./categoria.model";
export default function ComponenteActualizarAutor() {
  const history = useNavigate();
  const { id }: any = useParams();
  const url = "https://localhost:44394/Proyecto_EC1/categoria/";

  const [categoria, setCategoria] = useState<CategoriaDTO>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url + id)
      .then((response) => {
        setCategoria(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionesGet();
  }, []);

  async function ActualizarCategoria(autor: CategoriaDTO) {
    try {
      await axios.put(url + id, autor);
      history("/categoria");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Actualizar Autor</h1>
      <Formik
        initialValues={{
          id_catg: 0,
          nom_catg: "",
          estado: false,
        }}
        onSubmit={async (valores) => {
          await ActualizarCategoria({
            id_catg: valores.id_catg,
            nom_catg: valores.nom_catg,
            estado: valores.estado,
          });
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .required("Este campo es requerido")
            .max(100, "La longitud máxima del nombre es 100 caracteres"),
        })}
      >
        <Form>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Codigo:</label>
              <Field
                name="codigoautor"
                type="text"
                value={categoria?.id_catg}
                className="form-control"
                readonly
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label className="form-label">Nombre:</label>
              <Field
                name="nombre"
                type="text"
                value={categoria?.nom_catg}
                className="form-control"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label className="form-label">Estado:</label>
              <div className="col-6 form-check">
                {categoria?.estado ? (
                  <div>
                    <Field
                      className="form-check-input"
                      name="estado"
                      type="checkbox"
                      checked="true"
                    />
                    <label className="form-check-label">Habilitado</label>
                  </div>
                ) : (
                  <div>
                    <Field
                      className="form-check-input"
                      name="estado"
                      type="checkbox"
                    />
                    <label className="form-check-label">Deshabilitado</label>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button type="submit" className="btn btn-success">
                Actualizar
              </button>
              <Link className="btn btn-secondary" to="/categoria">
                Cancelar
              </Link>
            </div>
          </div>
        </Form>
      </Formik>

      <hr />
    </div>
  );
}
