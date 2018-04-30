import React, {Component} from 'react'
import TopBar from './topBar'
import './style.css'

class Header extends Component{
    render(){
        return(
            <header>
                <div className="topBar">
                    <TopBar />
                </div>
            </header>
        )
    }
}


export default Header;