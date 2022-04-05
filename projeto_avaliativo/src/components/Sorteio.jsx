import React from "react"
import Card from "./Card"
import { connect } from "react-redux"
function Sorteio(props){
    const {num} = props
    const aleatorio = parseInt(Math.random() * num)
    const texto_sorteio = "Sorteio de Números de 0 à " + num
    
    return (
        <Card title={`${texto_sorteio}`} red>
            <div>
                <span>
                    <span>Resultado: </span>
                    <span>{aleatorio}</span>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProps)(Sorteio)