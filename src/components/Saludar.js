import React from "react";
import {Text} from "react-native";


export default function Saludar(props) {
    const {name = "Jose", edad = "30"} = props;
    console.log(name);
    return (
        <Text>Hola {name}, tiene {edad} años</Text>
    )
}