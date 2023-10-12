const Person = (props) => {
    const legal = props.age > 18;
    const displayName = props.name.length > 8 ? props.name.substring(0, 6) + "..." : props.name;
    return (
        <div>
            <p>Learn some information about {displayName}</p>
            <ul>
                <li>{displayName}</li>
                <li>{props.age}</li>
            </ul>
            <h3>{legal ? "please go vote!" : "you must be 18" }</h3>
            <p>Hobbies:</p>
            <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <Person name="Brian" age="25" hobbies={["Skiing", "Surfing", "Running"]}/>
            <Person name="Jenelle" age="15" hobbies={["Weight Lifting", "Reading"]}/>
            <Person name="Champagnes" age="31" hobbies={["Video gaming"]}/>
        </div>
    )
}