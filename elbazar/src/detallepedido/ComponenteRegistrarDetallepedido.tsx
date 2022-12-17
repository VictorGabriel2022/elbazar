import axios from "axios";
import { ErrorMessage, Field, Form, Formik, isInteger } from "formik";
import React, { ChangeEvent, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { RegistrarDPedidoDTO } from "./detallepedido.model";





export default function ComponenteRegistrarDPedido() {
  const history = useNavigate();
  const url = "https://localhost:44394/Proyecto_EC1/detallepedido";
  async function RegistrarDPedido(dpedido: RegistrarDPedidoDTO) {
    try {
      await axios.post(url, dpedido);
      history("/detalleproducto");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Registro de Detalle Pedido</h1>
      <Formik
        initialValues={{
          id_pedido: "",
          id_prod: "",
          cant: "",
          precio: "",
          subtotal: "",
          estado: false
        }}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 1000));
          var est = false;
          if (valores.estado == true) {
            est = true;
          } else {
            est = false;
          }

          await RegistrarDPedido({
            id_pedido: valores.id_pedido,
            id_prod: valores.id_prod,
            cant: valores.cant,
            precio: valores.precio,
            subtotal: valores.subtotal,
            estado: est,
          });
        }}
        validationSchema={Yup.object({
          id_pedido: Yup.string()
            .required("Este campo es requerido")
            .max(100, "La longitud máxima del nombre es 100 caracteres"),
        })}
      >
        <Form>
          {/* <div className="row">
            <div className="col-6">
              <label className="form-label" htmlFor="nombre">
                Nombre:
              </label>

              <Field name="nombre" className="form-control" />

              <ErrorMessage name="nombre">
                {(mensaje) => <div className=" text-danger">{mensaje}</div>}
              </ErrorMessage>
            </div>
          </div> */}

          <ComponenteFormularioCajaTexto campo="id_pedido" label="Id_Pedido:" />
          <ComponenteFormularioCajaTexto campo="id_prod" label="Id_Producto:" />
          <ComponenteFormularioCajaTexto campo="cant" label="Cantidad:" />
          <ComponenteFormularioCajaTexto campo="precio" label="Precio:" />
          <ComponenteFormularioCajaTexto campo="subtotal" label="SubTotal:" />
          
          <div className="row">
            <div className="col-6">
              <label className="form-label">Estado:</label>
              <div className="col-6 form-check">
                <Field
                  className="form-check-input"
                  name="estado"
                  type="checkbox"
                />
                <label className="form-check-label">Habilitado</label>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-6">
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
              <Link className="btn btn-secondary" to="/detalleproducto">
                Cancelar
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
