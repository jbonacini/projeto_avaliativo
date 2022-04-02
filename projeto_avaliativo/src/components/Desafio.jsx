import "./Numeros.css"
import React from "react"
import Card from "./Card"

import { connect } from "react-redux"
import {alterarNumeroMinimo, alterarNumeroMaximo} from "../store/actions/numeros"

function Desafio(props) {
    const {min, max} = props
    return(
        <Card title= "DESAFIOREACT-REDUX" red>
            <div className="Intervalo">
                <span>
                    <span>Esse desafio é fácil d+ Dev’s do 6º ADS!!!</span>
                    {/* <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)} /> */}
                    <input type="number" value={min}
                    onChange={e => props.alterarMinino(+e.target.value)}/>
                </span>
                {/* <span>
                    <span>Máximo:</span>
                   <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)} /> 
                    <input type="number" value={max}
                    onChange={e => props.alterarMaximo(+e.target.value)}/>
                </span>*/}
            </div>
        </Card>
    )
}

// function mapDispatchToProps(dispatch) {
//     return {
//         alterarMinino(novoNumero) {
//             const action = alterarNumeroMinimo(novoNumero)
//             dispatch(action)
//         },
//         alterarMaximo(novoNumero) {
//             const action = alterarNumeroMaximo(novoNumero)
//             dispatch(action)
//         }
//     }
// }

// function mapStateToProps(state) {
//     return {
//         min: state.numeros.min,
//         max: state.numeros.max
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Numeros)