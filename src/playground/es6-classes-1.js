
const arrowFunc = (x) => x * x ;

const render = () => {
    const template = (
        <div>
            <h1>arrowFunc: {arrowFunc(100)}</h1>
        </div>
    );
    
    ReactDOM.render(template,document.getElementById('app'));
};

render();
