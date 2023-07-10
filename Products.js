import { func } from 'prop-types'
import React from 'react'

function Product(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.description}</h1>
            <h1>{props.price}</h1>
            <div> <img src={imagePath} alt={altText} /></div>
        </div>
    )
}c 
