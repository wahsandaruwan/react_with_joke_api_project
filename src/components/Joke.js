import {useState, useEffect} from 'react';
import Button from './Button';

// ------Joke Comp-----
const Joke = () => {
    // Click function
    const clickFunc = (e) => {
        console.log("Hello....");
        console.log(e.clientY);
    }

    // Sample joke object
    // const jokeObj = {
    //     joke : "Wait a second, Joke is Comming!"
    // }

    const getJoke = () => {
        // Fetch API
        fetch('https://icanhazdadjoke.com/', {
            method : 'GET',
            headers : {
                'Accept': 'application/json'
            }
        }).then((res) => {
            if(res.ok){
                return res.json();
            }
            else{
                return Error('Something went wrong!');
            }
        }).then((data) => {
            setJoke(data.joke);
        }).catch((err) => {
            setJoke(err);
        });
    }
    // UseState
    const [joke, setJoke] = useState('');

    // UseEffect
    useEffect(() => {
        getJoke();
    }, [])
    return (
        <div className="card">
            <h2>{joke}</h2>
            <Button text="Generate New Joke" style={{backgroundColor : 'black'}} clickBtn={getJoke}/>
        </div>
    )
}

export default Joke
