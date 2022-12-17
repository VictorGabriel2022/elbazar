import axios from "axios";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { DPedidoDTO } from "./detallepedido.model";

export default function ComponenteActualizarDetallepedido() {
  const history = useNavigate();
  const { id }: any = useParams();
  const url = "https://localhost:44394/Proyecto_EC1/detallepedido/";

  const [dpedido, setDPedido] = useState<DPedidoDTO>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url + id)
      .then((response) => {
        setDPedido(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionesGet();
  }, []);

  async function ActualizarDPedido(autor: DPedidoDTO) {
    try {
      await axios.put(url + id, autor);
      history("/detallepedido");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Actualizar Detalle Pedido</h1>
      <Formik
        initialValues={{      
          id_dped: 0,
          id_pedido: "",
          id_prod: "",
          cant: "",
          precio: "",
          subtotal: "", 
          estado: false,
        }}
        onSubmit={async (valores) => {
          await ActualizarDPedido({
            id_dped: valores.id_dped,
            id_pedido: valores.id_pedido,
            id_prod: valores.id_prod,
            cant: valores.cant,
            precio: valores.precio,
            subtotal: valores.subtotal, 
            estado: false,
          });
        }}
        validationSchema={Yup.object({
          id_dped: Yup.string()
            .required("Este campo es requerido")
            .max(100, "La longitud máxima del nombre es 100 caracteres"),
        })}
      >
        <Form>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Id Detalle Pedido:</label>
              <Field
                name="codigoautor"
                type="text"
                value={dpedido?.id_dped}
                className="form-control"
                readonly
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label className="form-label">IdPedido:</label>
              <Field
                name="nombre"
                type="text"
                value={dpedido?.id_pedido}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Id_Prod:</label>
              <Field
                name="codigoautor"
                type="text"
                value={dpedido?.id_prod}
                className="form-control"
                readonly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Cantidad:</label>
              <Field
                name="codigoautor"
                type="text"
                value={dpedido?.cant}
                className="form-control"
                readonly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Precio:</label>
              <Field
                name="codigoautor"
                type="text"
                value={dpedido?.precio}
                className="form-control"
                readonly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Subtotal:</label>
              <Field
                name="codigoautor"
                type="text"
                value={dpedido?.subtotal}
                className="form-control"
                readonly
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label className="form-label">Estado:</label>
              <div className="col-6 form-check">
                {dpedido?.estado ? (
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
              <Link className="btn btn-secondary" to="/detalleproducto">
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