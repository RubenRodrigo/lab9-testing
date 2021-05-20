import React from 'react'
import Part from './Part'

const Content = (props) => {

    //Desestructuramos las partes para trabajarlas directamente
    const {parts} = props.course
    
    //Recorremos los objetos del arreglo parts para asignar los campos al componente Part
    const listItems = parts.map((element, index) =>
        <Part key={index} parte={element.name} numEjercicios={element.exercises} />
    );
    return (
    <div>        
        {listItems}
    </div>
    )
    
}

export default Content;