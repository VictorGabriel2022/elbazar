import axios from "axios";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import { ClienteDTO } from "./cliente.model";
export default function ComponenteActualizarCliente() {
  const history = useNavigate();
  const { id }: any = useParams();
  const url = "https://localhost:44394/Proyecto_EC1/cliente/";

  const [cliente, setCliente] = useState<ClienteDTO>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url + id)
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionesGet();
  }, []);

  async function ActualizarCliente(autor: ClienteDTO) {
    try {
      await axios.put(url + id, autor);
      history("/cliente");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Actualizar Autor</h1>
      <Formik
        initialValues={{
          id_Cliente: 0,
          nombre: "",
          apellido: "",
          fech_nac: "",
          tip_doc: "",
          estado: false,
        }}
        onSubmit={async (valores) => {
          await ActualizarCliente({
            id_Cliente: valores.id_Cliente,
            nombre: valores.nombre,
            apellido: valores.apellido,
            fech_nac: valores.fech_nac,
            tip_doc: valores.tip_doc,
            estado: false,
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
                value={cliente?.id_Cliente}
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
                value={cliente?.nombre}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Apellido:</label>
              <Field
                name="codigoautor"
                type="text"
                value={cliente?.apellido}
                className="form-control"
                readonly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Fecha de nacimiento:</label>
              <Field
                name="codigoautor"
                type="text"
                value={cliente?.fech_nac}
                className="form-control"
                readonly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Documento:</label>
              <Field
                name="codigoautor"
                type="text"
                value={cliente?.tip_doc}
                className="form-control"
                readonly
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label className="form-label">Estado:</label>
              <div className="col-6 form-check">
                {cliente?.estado ? (
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
              <Link className="btn btn-secondary" to="/cliente">
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
