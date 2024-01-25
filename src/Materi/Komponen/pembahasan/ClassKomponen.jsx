import React from "react";


class ClassKomponen extends React.Component {
    // constructor (props) {
    //     super(props) 

    //     this.state = {
    //         value : 0
    //     }

    //     this.handlePlus = this.handlePlus.bind(this);
    //     this.handleMin = this.handleMin.bind(this);
    // }

    // handleMin(){
    //     if(this.state.value > 0 ){
    //         this.setState({value : this.state.value - 1});
    //     }
    //  }

    // handlePlus(){
    //     this.setState({value : this.state.value + 1});
    // }

       state = {
           value : 0
           }

           handleMin = () => {
            if(this.state.value > 0 ){
                this.setState({value : this.state.value - 1});
            }
         }
    
        handlePlus = () => {
            this.setState({value : this.state.value + 1});
        }

    

    render () {
        return (
            <div>
                <h1> {this.props.nama} sedang belajar di bootcamp</h1>
                <h2>Modul Functional dari ReactJs</h2>
                <button onClick={this.handleMin}>-</button>
                <span>{' '}{this.state.value} {' '}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}


export default ClassKomponen;