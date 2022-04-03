import "./Numeros.css"
import React from "react"
import Card from "./Card"

import { connect } from "react-redux"
import {alterarNumeroMinimo} from "../store/actions/numeros"

function Desafio(props) {
    const {min} = props
    return(
        <Card title= "DESAFIOREACT-REDUX" red>
            <div className="Intervalo">
                <span>
                    <span>Esse desafio é fácil d+ Dev’s do 6º ADS!!!</span>
                </span>
            </div>
        </Card>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinino(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Desafio)