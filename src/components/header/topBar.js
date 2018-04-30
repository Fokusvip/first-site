import React, {Component} from 'react'


class TopBar extends Component{
    render(){
        return(
            <div className="container">
                <ul className="topBarUlLeft">
                    <li><a href="">О портале</a></li>
                    <li><a href="">Новости</a></li>
                    <li><a href="" className="blueLink"><i className="fa fa-heart" aria-hidden="true"></i>Избранное 0</a></li>
                </ul>
                <ul className="topBarUlRight">
                    <li><a href="" className="blueLink">Перейти в CRM</a></li>
                    <li><i className="fa fa-user" aria-hidden="true"></i><b>UserName</b></li>
                    <li><a href="" className="blueLink">Выход</a></li>
                </ul>
            </div>
        )
    }
}

export default TopBar;