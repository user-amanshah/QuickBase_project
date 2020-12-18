import React from "react";

class SecondFieldBuilder extends React.Component {

    state = {
        inputs : [],
        curr : ''
    }
 
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(lenprevState.inputs)
    // }
  render() {
    return (<div>
        <input type="text" 
       
       onChange={(e) => {
           this.setState(prevState => ({
               curr: e.target.value
           }))
       }
       }
       placeholder="Heading Text"
       value={this.state.curr}
/>
       <button onClick= {() => {
           this.setState({
            inputs : [
                ...this.state.inputs, 
                this.state.curr
            ],
            curr: ''
        })
       }}>
        ADD</button>   
        <ul>
        {
            this.state.inputs.map(input => {
               return ( <li>
                    {input}
                    <button
                    onClick = {() => {
                        const newInputs = this.state.inputs.filter(i => i !== input)
                        this.setState({
                                inputs : newInputs
                         })
                    }}
                    >
                        DELETE
                    </button>
                </li>
            )})
        }
        </ul>
        
        </div>)
  }
}
export default SecondFieldBuilder;
