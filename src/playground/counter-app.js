
class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count:0
        };

    }

    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if(!isNaN(count)){        
            this.setState(()=> ({count}));

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count != this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    handleAddOne(){
        //alert('handleAddOne');
        this.setState((prevState) => ({            
            count: prevState.count + 1 
        }));
    }

    handleMinusOne(){
        this.setState((prevState)=> ({            
                count: prevState.count - 1             
        }));
    }

    reset(){
        this.setState(()=> {
            return {
                count: 0 
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}> +1</button>
                <button onClick={this.handleMinusOne}> -1</button>
                <button onClick={this.reset}> reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const addOne = ()=> {
//     count ++;
//     console.log('add one',count);
//     renderCounterApp();
// };

// const minusOne = ()=> {
//         count--;
//         renderCounterApp();
// };
// const reset = ()=>{
//     count = 0;
//     renderCounterApp();
// };

// var approot = document.getElementById('app');

// const renderCounterApp = () => {

//     const templateButton = (
//         <div>
//         <h2>Count : {count} </h2>
//         <button id = "myId" className = "button" onClick = {addOne}>{count}</button>
//         <button id = "myIdminus" className = "button" onClick = {minusOne}>-1</button>
//         <button id = "myIdreset" className = "button" onClick = {reset}>0</button>
//         </div>
//     ); 
    
//     ReactDOM.render(templateButton, approot);
// };

// renderCounterApp();