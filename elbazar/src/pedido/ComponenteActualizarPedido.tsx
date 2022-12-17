import axios from "axios";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { PedidoDTO } from "./pedido.model";
export default function ComponenteActualizarCliente() {
  const history = useNavigate();
  const { id }: any = useParams();
  const url = "https://localhost:44394/Proyecto_EC1/pedido/";

  const [pedido, setPedido] = useState<PedidoDTO>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url + id)
      .then((response) => {
        setPedido(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionesGet();
  }, []);

  async function ActualizarPedido(autor: PedidoDTO) {
    try {
      await axios.put(url + id, autor);
      history("/pedido");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Actualizar Pedido</h1>
      <Formik
        initialValues={{
          id_pedido: 0,
          id_Cliente: "",
          fech_ped: "",
          hor_ped: "",
          fech_entr: "",
          obs: "",
          estado: false,
        }}
        onSubmit={async (valores) => {
          await ActualizarPedido({
            id_pedido: valores.id_pedido,
            id_Cliente: valores.id_Cliente,
            fech_ped: valores.fech_ped,
            hor_ped: valores.hor_ped,
            fech_entr: valores.fech_entr,
            obs: valores.obs,
            estado: false,
          });
        }}
        validationSchema={Yup.object({
          id_pedido: Yup.string()
            .required("Este campo es requerido")
            .max(100, "La longitud máxima del nombre es 100 caracteres"),
        })}
      >
        <Form>
          <div className="row">
            <div className="col-6">
              <label className="form-label">IdPedido:</label>
              <Field
                name="codigoautor"
                type="text"
                value={pedido?.id_pedido}
                className="form-control"
                readonly
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label className="form-label">Idcliente:</label>
              <Field
                name="nombre"
                type="text"
                value={pedido?.id_Cliente}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">FechaPedido:</label>
              <Field
                name="codigoautor"
                type="text"
                value={pedido?.fech_ped}
                className="form-control"
                readonly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Hora de pedido:</label>
              <Field
                name="codigoautor"
                type="text"
                value={pedido?.hor_ped}
                className="form-control"
                readonly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">FechaEntrega:</label>
              <Field
                name="codigoautor"
                type="text"
                value={pedido?.fech_entr}
                className="form-control"
                readonly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Observaciones:</label>
              <Field
                name="codigoautor"
                type="text"
                value={pedido?.obs}
                className="form-control"
                readonly
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label className="form-label">Estado:</label>
              <div className="col-6 form-check">
                {pedido?.estado ? (
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
              <Link className="btn btn-secondary" to="/pedido">
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