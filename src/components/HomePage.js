import Header from './Header';
import Joke from './Joke';
import Button from './Button';

const HomePage = () => {
    return (
        <div>
            <Header title="Welcome Himal"/>
            <Joke/>
            <Button text="About Us" style={{backgroundColor : 'red'}} path="/about"/>
        </div>
    )
}

export default HomePage
