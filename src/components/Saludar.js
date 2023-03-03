import React from "react";
import {Text} from "react-native";


export default function Saludar(props) {
    //const {name = "Jose", edad = "30"} = props;

    const { name, edad } = props;
    console.log(name);
    return (
        <Text>Hola {name}, tiene {edad} años</Text>
    )
}


Saludar.defaultProps = {
    //firstname: "Agustin", 
    //lastname: "Navarro"
    name : "juan", 
    edad : "15"
};