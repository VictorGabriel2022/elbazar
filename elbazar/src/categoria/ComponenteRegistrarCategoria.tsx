import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { ChangeEvent, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ComponenteFormularioCajaTexto from "../utilidad/ComponenteFormularioCajaTexto";
import { CategoriaRegistrarDTO } from "./categoria.model";


export default function ComponenteRegistrarCategoria() {
  const history = useNavigate();
  const url = "https://localhost:44394/Proyecto_EC1/categoria";
  async function RegistrarCategoria(categoria: CategoriaRegistrarDTO) {
    try {
      await axios.post(url, categoria);
      history("/categoria");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Registro de Categoria</h1>
      <Formik
        initialValues={{
          nom_catg: "",
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

          await RegistrarCategoria({
            nom_catg: valores.nom_catg,
            estado: est,
          });
        }}
        validationSchema={Yup.object({
          nom_catg: Yup.string()
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

          <ComponenteFormularioCajaTexto campo="nom_catg" label="Nombre:" />

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
              <Link className="btn btn-secondary" to="/categoria">
                Cancelar
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
