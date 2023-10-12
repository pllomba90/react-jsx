const  firstComponent = () => {
    return <h1>"My very first component”</h1>
}


const namedComponent = (props) => {
  return (
      <div>
          <p>"My name is {props.name} </p>
      </div>
  );
}

  const App = () => {
    return (
        <div>
            <firstComponent />
            <namedComponent />
        </div>
    );
}

ReactDOM.render(<App/>,
  document.getElementById("root"));
