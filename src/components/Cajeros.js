import React from 'react';
class Cajeros extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        datosCargados: false,
        turnos: [],
        id: 0
    }
    refreshPage() {
        window.location.reload(false);
    }
    //Recibir los datos
    enviarDatos= ()=> {
        console.log("Formulario enviado...")
        console.log("Cajero 5")
        const {id}=this.state
        console.log(id)

        var datosEnviar = { ID_TURNO: id, CAJERO:5}
        fetch("https://alexispracticas.net/pedir/?insertarVinculo=1", {
            method: "POST",
            body: JSON.stringify(datosEnviar)
        })


            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta);
            })
            .catch(console.log)
    }




    
    cargarDatos() {
        fetch("https://alexispracticas.net/pedir/")
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                console.log(datosRespuesta)
                this.setState({
                    datosCargados: true,
                    turnos: datosRespuesta
                })
            })
            .catch(console.log)
    }
    componentDidMount() {
        this.cargarDatos()
    }
    render() {
        const { turnos, datosCargados } = this.state
        if (!datosCargados) {
            return (
                <div className="container">
                    Cargando datos.....
                </div>
            );
        } else {
            return (
                <div className="card">
                    <div className="card-header">

                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="">CAJERO</label>
                                <input type="text" name="cajero" id="cajero" className="form-control" value={5} aria-describedby="helpId" />
                                <small id="helpId" className="text-muted">NUMERO DE CAJERO</small>
                            </div>

                            {turnos.map((turnos) =>

                                <div className="form-group" key={turnos.id}>
                                    <label htmlFor="">CLIENTE</label>
                                    <input type="text" name="turno" id="turno" className="form-control" placeholder="" aria-describedby="helpId" value={turnos.id} />
                                    <small id="helpId" className="text-muted">NUMERO DEL CLIENTE</small>

                                </div>



                            )}

                            {turnos.map((turnos) =>
                                this.setState({
                                    id: turnos.id

                                })
                            )}
                            <div className="form-group">
                                <button type="button" className="btn btn-primary" onClick={this.enviarDatos}>ASIGNAR</button>
                                <button type="button" className="btn btn-success" onClick={this.refreshPage}>PEDIR</button>
                            </div>


                        </form>



                    </div>
                    <div className="card-footer text-muted">
                        Footer
                    </div>
                </div >
            );
        }
    }
}

export default Cajeros;