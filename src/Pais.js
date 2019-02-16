import React, { Component } from 'react';
import Paises from './paises.json';


class Pais extends Component {
    
    state = {
        paises: Paises
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.match.params.pais}
                {this.props.match.params.region}
            </div>
        );
    }
}

export default Pais;