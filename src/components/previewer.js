import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon }from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import marked from 'marked';
//fa-expand-alt
class Previewer extends React.Component{
    state ={ 
        input : '',
        editor : true ,
        previerw : true
    }
    handleClick = ()=>{
        this.setState({
            previewer : false 

        })
    }
    render(){
        return (
            <section className={this.state.previerw ? "container" : "d-none"}>
                <div className="p-0 px-2 m-0 head bg-danger text-white rounded d-flex justify-content-between">
                    <p className="p-0 m-0"><FontAwesomeIcon icon={faFreeCodeCamp}/> Previewer</p>
                    <span onClick={this.handleClick} className="icon">{this.state.previerw ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faExpandAlt}/>}</span>
                </div>
                <div id="preview" className="w-100 rounded py-4 pl-3 pr-5 bg-my-red"  dangerouslySetInnerHTML={{__html : marked(this.props.data.textAreaValue)}}  />
           </section>
        )
    }
} 


let mapToState = (state)=>{
    return {
        data : state
    }
}



export default connect(mapToState)(Previewer) ;