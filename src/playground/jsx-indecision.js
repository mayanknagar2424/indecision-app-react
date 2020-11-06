console.log('App.js is running');

//JSX - Javascript XML

var user = {
    name:'mayank nagar',
    age:38,
    location:'Crossings Republik, GHZ'
}

function getLocation(location){
 if(location){
     return <p>Location: {location} </p>;
 }
 else {
     return 'Unknown';
 }
}
var templateTwo = (
<div>
    <h2>Name:{user.name}</h2>
    <p>Age:{user.age}</p>
    <p>Location:{user.location}</p>
</div>
);

var templatethree = (
    <div>
        <h2>Name:{user.name ? user.name : 'anonymous'}</h2>
        <p>Age:{user.age}</p>
        {getLocation(user.location)}
    </div>
    );

    const app = {
         title : 'Indicision Application',
         subtitle:'This is a sample rect app',
         options:[]
        
    };

    const onRemoveAll = ()=> {
        app.options = [];
        render();
    };

    const onMakeDecision = ()=> {
      const random =  Math.floor(Math.random()*app.options.length);
      console.log(random);  
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value;
        if(option){
            app.options.push(option);
            e.target.elements.option.value = '';
        }
        render();

        //console.log('form submitted');

    };
    var approot = document.getElementById('app');

    const render = ()=> {
    
        const template = (
            <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are our options' : 'No options'}</p>
            <button onClick={onMakeDecision}>Lets do something!!</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }                
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type = "text" name="option"/>
                <button>Add Options</button>
            </form>

            </div>
        );
        ReactDOM.render(template, approot);
    };

render();