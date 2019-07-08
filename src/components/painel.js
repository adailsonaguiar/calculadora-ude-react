import React, { Component } from 'react'
import { View } from 'react-native'

import Entrada from './entrada'
import Operacao from './operacao'
import Comando from './comando'

class Painel extends Component {

    constructor(props) {
        super(props)
        this.state = { num1: '10', num2: '33', operacao: '' }

        //  Mantendo o contexto do componente atual ao acessar
        //  determinada função em outro componente
        this.calcular = this.calcular.bind(this)
        this.atualizaValor = this.atualizaValor.bind(this)
        this.changeOperation = this.changeOperation.bind(this)
    }

    calcular() {
        const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2)
        alert(resultado)
    }

    atualizaValor(nomeCampo, valor) {

        const obj = {}
        obj[nomeCampo] = valor
        this.setState(obj)
    }

    changeOperation(operacao) {
        this.setState({ operacao })
    }

    render() {
        return (
            <View>
                <Entrada atualizaValor={this.atualizaValor} num1={this.state.num1} num2={this.state.num2} />
                <Operacao acao={this.state.operacao} changeOperation={this.changeOperation} />
                <Comando acao={this.calcular} />
            </View>
        )
    }
}

export { Painel }