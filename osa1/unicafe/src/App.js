import { useState } from 'react'
import './App.css';

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleClick = () => {

    }

    return (
        <div className="App">
            <Button />
        </div>
    );
}

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={() => handleClick}>{text}</button>
    )
}

export default App;
