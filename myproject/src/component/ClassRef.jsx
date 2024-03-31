import React, { Component, createRef } from 'react'

export default class ClassRef extends Component {
    constructor() {
        super()
        this.inputRef = createRef()
        this.input = createRef()
    }

    hadelRef = (dhruv) => {
        dhruv.current.style.color = "red"
        dhruv.current.style.backgroundColor = "yellow"
    }

    handleH = (ref1) => {
        ref1.current.style.color = "green"
        ref1.current.style.backgroundColor="orange"
    }

    render() {
        return (
            <>
                <h1 ref={this.inputRef}>Captain America</h1>
                <button onClick={() => this.hadelRef(this.inputRef)}>Click me</button>
                <hr />
                <h2 ref={this.input}>Jay shree Krishna</h2>
                <button onClick={() => this.handleH(this.input)}>Click me</button>
                <hr />

            </>
        )
    }
}


