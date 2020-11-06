import React from 'react';

export default class AddOptions extends React.Component{

    //With installed babel-plugin-transform-class-properties
    //with that we dont need contructor and no need to bind
    //and we also can convert event handlers into properties with =>
    // constructor(props){
    //     super(props);
    //     this.handleAddOptions = this.handleAddOptions.bind(this);
    //     this.state = {
    //         error: undefined
    //     };
    // }

        state = {
            error: undefined
        };
    //Below is a conversion of an event handler to and Event
    //handleAddOptions(e) {    
    handleAddOptions = (e) => {
        
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(option);
       
        // this.setState(()=>{
        //     return {
        //         error: error
        //     }    ;        
        // });

        this.setState(()=>({error}));

        if(!error){
            e.target.elements.option.value = '';
        }
                
    }

    render(){
        return(
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
               <form className="add-option" onSubmit={this.handleAddOptions}>
               <input className="add-option__input" type = "text" name ="option" />
               <button className="button" >Add Options</button>
               </form>
            </div>
        );
    }
}