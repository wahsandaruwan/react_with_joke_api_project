import {useState, useEffect, useRef} from 'react';
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

    // Generate random color
    const genRandomColor = () => {
        let x = '';
        while (x.length < 6) {
          x += (Math.random()).toString(16).substr(-8).substr(-4);
        }
        return '#' + x;
    }

    // UseState
    const [joke, setJoke] = useState('');

    // Fetch a joke
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

        console.log(currJoke.current);
        currJoke.current.style.backgroundColor = genRandomColor();
    }

    // UseEffect
    useEffect(() => {
        getJoke();
    }, []);

    // UseRef
    const currJoke = useRef();

    return (
        <div ref={currJoke} className="card">
            <h2>{joke}</h2>
            <Button text="Generate New Joke" style={{backgroundColor : 'black'}} clickBtn={getJoke}/>
        </div>
    )
}

export default Joke
