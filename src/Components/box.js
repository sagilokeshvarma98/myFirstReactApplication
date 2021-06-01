
import React from 'react'
import './styles/box.css'

class Box extends React.Component{
    render(){
        return(
        <div className="box">
            {this.props.title}
            <ul>
            {this.props.items.map(x=><li>{x}</li>)}
            </ul>
        </div>
        );
    }
}
export default Box;