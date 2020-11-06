import React from 'react';
import AddOptions from './AddOptions';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption  = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
           options: ['First option','Second option','Third option','Fourth option'],
           selectedOption : undefined 
        };
    }


    //Life cycle Hooks
    //Triggered When the page load for the first time
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if(options){
            this.setState(()=>({options}));
            }
        }
        catch(e)
        {

        }
        

        //console.log('componentDidMount');
    }

    //Life cycle Hooks
    //Triggered Every time any update occurs on the page
    componentDidUpdate(prevpProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
                        
        }        
    }

    //Life cycle Hooks
    //Triggers when page unloaded or terminated
    componentWillUnmount()
    {
        console.log('componentWillUnmount');
    }

    handleClearSelectedOption = () => {
        this.setState(()=>({selectedOption: undefined}));
    }


    handleDeleteOptions(){
        // this.setState(()=>{
        //     return {
        //         options: []
        //     };
        // });

        this.setState( ()=>({ options: [] }));
    }

    handleDeleteOption (optionToRemove){
        this.setState((prevState) => ({
           options: prevState.options.filter((option)=> optionToRemove !== option )     
        }));
    }

    handlePick(){
        const rn = Math.floor(Math.random() * this.state.options.length);
        const opt = this.state.options[rn];
        //alert(opt);
        this.setState(()=>({
            selectedOption: opt
        }));
    };

    handleAddOption(option){        
        if(!option){
            return 'Enter valid value to add option';
        }        
        else if(this.state.options.indexOf(option) > -1 ){
            return 'This option already exists';
        }       
        this.setState((prevState)=>{
            return {
                options: prevState.options.concat([option])
            }
        }); 
        
        //this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    render(){
        const title = "Here the title begins";
        const subTitle = "Yes!! We are going to do it now !!";        
        return (
            <div>                    
                <Header title={title} subtitle = {subTitle}/>
                
                <div className="container">
                    <Action 
                        hasOptions = {this.state.options.length > 0 }
                        handlePick = {this.handlePick}  />
                  
                   <div className="widget">
                        <Options 
                        options = {this.state.options} 
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                    /> 
                    <AddOptions handleAddOption = {this.handleAddOption}/>
                   </div>     
                   
                </div>    
                <OptionModal 
                selectedOption = {this.state.selectedOption}
                handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>   
        );
    }
}