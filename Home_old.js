import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('Terri');//sets in. value
    const [age, setAge] = useState(20);
    const handleClick = () => {
        setName('Tina');
        setAge(4);
    }
    const handleClickTwo = (name) => {
        console.log('Hi' + name);

    }


    return (

        <div className="home">
            <h2>Homepage</h2>
            <p> {name} is {age} years old</p>
            <button onClick={handleClick}> Click Me</button>
            <button onClick={() => handleClickTwo('Terri')
            }> Click Again</button>
        </div>
    );
}

export default Home;