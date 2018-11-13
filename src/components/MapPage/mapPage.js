import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './MapPage.css';

class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: Cookies.get('session')
        }
    }






    render() {
        if (this.state.session === "true") {
            return (
                <div className="map-page">

                    <div className="container controlsupmap">
                        <input id="description-input" className="controls col col-4 col-md-4" type="text"
                            placeholder="Describe el servicio" />

                        <input id="origin-input" className="controls col col-4 col-md-4" type="text"
                        placeholder="Ingresa el origen"/>

                        <input id="destination-input" className="controls col col-4 col-md-4" type="text"
                        placeholder="Ingresa el destino"/>

                        <div id="mode-selector" className="controls d-none container">
                            <input type="radio" name="type" id="changemode-walking" />
                            <label htmlFor="changemode-walking">Caminando</label>

                            <input type="radio" name="type" id="changemode-transit"/>
                            <label htmlFor="changemode-transit">transporte publico</label>

                            <input type="radio" name="type" id="changemode-driving" defaultChecked="checked"/>
                            <label htmlFor="changemode-driving">Conduciendo</label>
                        </div>
                    </div>

                    <div id="map"></div>


                </div>
            );
        } else {
            alert("No tienes permisos para crear servicios");
            window.location.replace("/");
            Cookies.remove('session');
        }
  }
}

export default MapPage;
