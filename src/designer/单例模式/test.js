import React, { Component } from 'react'
import dialog from './createLoginDialog'
import './test.css'

export default class Login extends Component {
    show = () => {
        dialog.show()
    }
    hide =()=> {
        dialog.hide()
    }
    render() {
        return (
            <div className='wrapper-dialog'>
                <button onClick={this.show}>点击登陆</button>
                <button onClick={this.hide}>点击隐藏</button>
            </div>
        )
    }
}
