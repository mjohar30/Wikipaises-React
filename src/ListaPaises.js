import React, { Component } from 'react';
import Paises from './paises.json'

class ListaPaises extends Component {

    state ={
        paises: Paises
    }

    render() {
        return (
            <div>
                {this.state.paises.map(paises => {
                    return (
                            <ul>
                                <li>
                                {paises.flag}{paises.name.official}
                                </li>
                            </ul>
                    )
                })}
                
            </div>
        );
    }
}

export default ListaPaises;