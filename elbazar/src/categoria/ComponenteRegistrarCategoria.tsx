export default function ComponenteRegistrarCategoria() {
    return (
      <div>
        <h1>Registro de Categoria</h1>
        <form className="form-control">
          <div className="row">
            <div className="col-6">
              <label className="form-label">Nombre:</label>
              <input type="text" className="form-control" id="txtNom" required />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Descripcion:</label>
              <input type="text" className="form-control" id="txtNom" required />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Estado:</label>
             <div className="col-6 form-check">
                <input type="checkbox" className="form-check-input" id="chkEst" />
                <label className="form-check-label">Habilitado</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }