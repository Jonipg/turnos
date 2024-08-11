import React from 'react';

class Listar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        turnos:[],
        datosCargados: false
    }
    crearTurno(){
        console.log("Formulario enviado...")
        var datosEnviar = { estatus: 1}
        fetch("https://alexispracticas.net/turnos/?insertarTurno=1", {
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
        fetch("https://alexispracticas.net/turnos/")
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
        const {turnos,datosCargados}=this.state
        if(!datosCargados){
            return (
                <div className="container">
                    Cargando datos.....
                </div>
            );
        }else{
            return (
                <div className="card">
                    <div className="card-header">
                        <button type="button" className="btn btn-primary" onClick={this.crearTurno}>Crear</button>
                    </div>
                    <div className="card-body">
                       <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Turno</th>
                                <th>Cajero</th>
                            </tr>
                        </thead>
                        <tbody>
                        {turnos.map((turnos) =>
                                    <tr key={turnos.ID}>
                                        <td scope="row">{turnos.ID}</td>
                                        <td>{turnos.ID_TURNO}</td>
                                        <td>{turnos.CAJERO}</td>
                                    </tr>
                                )}
                            
                        </tbody>
                       </table>
                    </div>
                    <div className="card-footer text-muted">
                        Footer
                    </div>
                </div>
            );
        }
        
    }
}

export default Listar;