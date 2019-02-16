import React, { Component } from 'react';

class Header extends Component {
    

    render() {
        const estilo = {
            backgroundColor: "Blue",
            textAlign: "left"
        }
        return (
            <div style={estilo}>
                <h1>React - Wikipages</h1>
            </div>
        );
    }
}

export default Header;