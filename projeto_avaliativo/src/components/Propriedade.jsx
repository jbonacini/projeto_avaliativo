import React from "react"
import Card from "./Card"
import App from "../App"

import { connect } from "react-redux"

function Propriedade(props){
    const {min} = props
    return (
        <Card titulo blue>
            <div>
                <span>
                    <span ><Propriedade/></span>
                    <span>{(min)}</span>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
    }
}

export default connect(mapStateToProps)(Propriedade)