import axios from "axios";
import { ErrorMessage, Field, Form, Formik, isInteger } from "formik";
import React, { ChangeEvent, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { ProductoRegistrarDTO } from "./producto.model";




export default function ComponenteRegistrarProducto() {
  const history = useNavigate();
  const url = "https://localhost:44394/Proyecto_EC1/producto";
  async function RegistrarProducto(producto: ProductoRegistrarDTO) {
    try {
      await axios.post(url, producto);
      history("/producto");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Registro de Producto</h1>
      <Formik
        initialValues={{
          nomb_prod: "",
          prec_prod: "",
          stock_prod: "",
          id_catg: "",
          estado: false,
        }}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 1000));
          var est = false;
          if (valores.estado == true) {
            est = true;
          } else {
            est = false;
          }

          await RegistrarProducto({
            nomb_prod: valores.nomb_prod,
            prec_prod: valores.prec_prod,
            stock_prod: valores.stock_prod,
            id_catg: valores.id_catg,
            estado: est,
          });
        }}
        validationSchema={Yup.object({
          nomb_prod: Yup.string()
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

          <ComponenteFormularioCajaTexto campo="nomb_prod" label="Nombre:" />
          <ComponenteFormularioCajaTexto campo="prec_prod" label="Precio:" />
          <ComponenteFormularioCajaTexto campo="stock_prod" label="Stock:" />
          <ComponenteFormularioCajaTexto campo="id_catg" label="ID categoria:" />
          
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
              <Link className="btn btn-secondary" to="/producto">
                Cancelar
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
