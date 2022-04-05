import React from 'react'
import './Card.css'

function getColor(props) {
    if(props.grape) return "Grape"
    if(props.green) return "Green"
    if(props.blue) return "Blue"
    if(props.red) return "Red"
    if (props.orange) return "Orange"
    return ""
}

export default props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className='Header'>
                <span className='Title'>{props.title}</span>
            </div>

            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}