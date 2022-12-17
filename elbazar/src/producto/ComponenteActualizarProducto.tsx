import axios from "axios";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";


import { ProductoDTO } from "./producto.model";
export default function ComponenteActualizarProducto() {
  const history = useNavigate();
  const { id }: any = useParams();
  const url = "https://localhost:44394/Proyecto_EC1/producto/";

  const [producto, setProducto] = useState<ProductoDTO>();
  //se realiza la peticion al API por medio del axios
  const peticionesGet = async () => {
    await axios
      .get(url + id)
      .then((response) => {
        setProducto(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    peticionesGet();
  }, []);

  async function ActualizarProducto(producto: ProductoDTO) {
    try {
      await axios.put(url + id, producto);
      history("/producto");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Actualizar Producto</h1>
      <Formik
        initialValues={{  
          id_prod: 0,
          nomb_prod: "",
          prec_prod: "",
          stock_prod:"",
          id_catg: "",
          categoria: "",
          estado: false,
        }}
        onSubmit={async (valores) => {
          await ActualizarProducto({
            id_prod: valores.id_prod,
            nomb_prod: valores.nomb_prod,
            prec_prod: valores.prec_prod,
            stock_prod:valores.stock_prod,
            id_catg: valores.id_catg,
            categoria: valores.categoria,
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
                value={producto?.id_prod}
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
                value={producto?.nomb_prod}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Precio:</label>
              <Field
                name="codigoautor"
                type="text"
                value={producto?.prec_prod}
                className="form-control"
                readonly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Stock:</label>
              <Field
                name="codigoautor"
                type="text"
                value={producto?.stock_prod}
                className="form-control"
                readonly
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Idcategoria:</label>
              <Field
                name="codigoautor"
                type="text"
                value={producto?.id_catg}
                className="form-control"
                readonly
              />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label className="form-label">Estado:</label>
              <div className="col-6 form-check">
                {producto?.estado ? (
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
              <Link className="btn btn-secondary" to="/producto">
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
