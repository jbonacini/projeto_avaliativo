import "./Numeros.css"
import React from "react"
import Card from "./Card"

import { connect } from "react-redux"
import { alterarNumeroMinimo} from "../store/actions/numeros"

function Numeros(props) {
    const { min } = props
    return (
        <Card title="Escolha um número" green>
            <div className="Intervalo">
                <span>
                    <span>Número</span>
                    <input type="number" value={min}
                        onChange={e => props.alterarMinino(+e.target.value)} />
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
        },
    }
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Numeros)