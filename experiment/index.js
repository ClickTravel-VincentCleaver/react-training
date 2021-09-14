function App() {
    return (
        <div>
            <h1>My Recipes</h1>
            <Recipe name="Bread" />
            <Recipe name="Toast" />
            <Recipe name="Cake" />
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
