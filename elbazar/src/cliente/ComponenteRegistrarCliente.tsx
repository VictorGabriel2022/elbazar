import axios from "axios";
import { ErrorMessage, Field, Form, Formik, isInteger } from "formik";
import React, { ChangeEvent, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { ClienteRegistrarDTO } from "./cliente.model";





export default function ComponenteRegistrarCliente() {
  const history = useNavigate();
  const url = "https://localhost:44394/Proyecto_EC1/cliente";
  async function RegistrarCliente(cliente: ClienteRegistrarDTO) {
    try {
      await axios.post(url, cliente);
      history("/cliente");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Registro de Cliente</h1>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          fech_nac: "",
          tip_doc: "",
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

          await RegistrarCliente({
            nombre: valores.nombre,
            apellido: valores.apellido,
            fech_nac: valores.fech_nac,
            tip_doc: valores.tip_doc,
            estado: est,
          });
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
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

          <ComponenteFormularioCajaTexto campo="nombre" label="Nombre:" />
          <ComponenteFormularioCajaTexto campo="apellido" label="Apellido:" />
          <ComponenteFormularioCajaTexto campo="fech_nac" label="Fecha de Nacimiento:" />
          <ComponenteFormularioCajaTexto campo="tip_doc" label="Tipo de Documento:" />
          
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
              <Link className="btn btn-secondary" to="/cliente">
                Cancelar
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
