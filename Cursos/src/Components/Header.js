import React from 'react'

const Header = (props) => {

    //Desestructuramos para desempacar el valor del nombre del curso
    const name = props.name
    return (
    <div>
        <h1>{name}</h1>
    </div>
    )
}

export default Header;