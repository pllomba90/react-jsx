const Tweet = (props) => {
    return(
        <div>
            <p>{props.tweet}</p>
            <ul>
                <li>{props.firstName}</li>
                <li>{props.date}</li>
                <li>{props.username}</li>
            </ul>


        </div>
    );
}

const App = () =>{
   return(
    <div>

    <Tweet username="dannyboy" firstName="Daniel" date="10/8/23" tweet="Supercalifragilisticexpialidocious" />
    <Tweet username="jimmyC" firstName="James" date="10/8/23" tweet="Go Patriots!"/>
    <Tweet username="mandyB" firstName="Amanda" date="10/8/23" tweet="Who knows what to say here"/>
    
    </div>
    );
   
}

ReactDOM.render(<App/>,
document.getElementById("root"));