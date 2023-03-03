import React from "react";
import {Text} from "react-native";
import PropTypes from "prop-types";


export default function Saludar(props) {
    //const {name = "Jose", edad = "30"} = props;

    const { firstname, lastname, edad } = props;
    console.log(firstname);
    return (
        <Text>Hola {firstname} {lastname}, {edad}</Text>
    )
}

/*
Saludar.defaultProps = {
    //firstname: "Agustin", 
    //lastname: "Navarro"
    name : "juan", 
    edad : "15"
};
*/
Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string,
    years: PropTypes.number
}