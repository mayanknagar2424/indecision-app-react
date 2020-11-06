
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption  = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
           options: ['First option','Second option','Third option','Fourth option']     
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

            //console.log('componentDidUpdate');    
        }        
    }

    //Life cycle Hooks
    //Triggers when page unloaded or terminated
    componentWillUnmount()
    {
        console.log('componentWillUnmount');
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
        alert(opt);
    }

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
                <Action 
                    hasOptions = {this.state.options.length > 0 }
                    handlePick = {this.handlePick}  />
                <Options 
                    options = {this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                /> 
                <AddOptions handleAddOption = {this.handleAddOption}/>
            
        </div>   
        );
    }
}

// class Header extends React.Component {
//     render(){
//         //console.log(this.props.title);
//         return (
//             <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

//Stateless functional component
const Header = (props)=>{       
        return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        );    
}

// Header.defaultProps = {
//     title: 'This is default Header'
// }
// class Action extends React.Component{   

//     render(){
//         return(
//             <div>
//                 <button onClick={this.props.handlePick} disabled = {!this.props.hasOptions} >What's next ??</button>
//             </div>
//         );
//     }
// }

//Stateless functional component
const Action = (props)=>{
    return(
        <div>
            <button onClick={props.handlePick} disabled = {!props.hasOptions} >What's next ??</button>
        </div>
    );
}
const Options = (props) => {
        return (
            <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>   
            {props.options.length === 0 && <p>Please add an option to get started!</p>}            
                {
                    //this.props.options.map((option)=> <p key={option}>{option}</p>)
                    props.options.map((option)=> (
                    <Option 
                        key={option} 
                        optionText = {option} 
                        handleDeleteOption = {props.handleDeleteOption}
                    />
                    ))
                }
            </div>
        );
    };


// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                <p>{this.props.optionText}</p>
//             </div>  
//         );
//     }
// }

//Stateless Functional Component
const Option = (props)=>{
    return (
        <div>
           <p>{props.optionText}
           <button onClick={(e)=>
           { props.handleDeleteOption(props.optionText);}
          }
          >
          remove
          </button>
           </p>
        </div>  
    );
}
class AddOptions extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOptions(e){       

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
                {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleAddOptions}>
               <input type = "text" name ="option" />
               <button >Add Options</button>
               </form>
            </div>
        );
    }
}

// const jsx = (
// <div>    
//     <Header />
//     <Action />
//     <Options /> 
//     <AddOptions />
    
// </div>
// );

//Stateless Functional Component

// const User = (props)=>{
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Address: {props.address}</p>

//         </div>
//     );
// }

//ReactDOM.render(jsx, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//ReactDOM.render(<User name="mayank" address="CR REP,GHZ" />, document.getElementById('app'));

