import React from 'react';
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon }from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
//fa-expand-alt
class Editor extends React.Component{
    state ={ 
        input : '',
        editor : true ,
        previerw : true
    }
    handleChange =(e)=>{
        this.props.sendData(e.target.value)
    }
    handleClick = ()=>{
        this.setState({
            editor : false 
            
        })
    }
    render(){
        return (
            <section className={this.state.editor ? "container my-3 special" : "d-none"}>
                <div className="container">
                    <div className="container">
                        <div className="container">                            
                            <div className="head  text-white w-100 bg-danger px-2 rounded justify-content-between d-flex">
                                <span><FontAwesomeIcon icon={faFreeCodeCamp}/> Editor</span>
                                <span onClick={this.handleClick} className="icon">{this.state.editor ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faExpandAlt}/>}</span>
                            </div>
                            <textarea value={this.props.defaultValue} onChange={this.handleChange} className="eidtor w-100  form-control  bg-my-red rounded min-vh-50" id="editor"></textarea>              
                        </div>
                    </div>
                </div>
            </section>
        )
    }
} 

let mapToState = (state)=>{
    return {
        defaultValue : state.textAreaValue
    }
} 
let MapDispatchToProps=(dispatch)=>{
    return { 
        sendData : (data)=>{dispatch({type : "INPUTED" , data})} 
}
}



export default connect(mapToState,MapDispatchToProps)(Editor) ;
