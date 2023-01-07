import { useState } from 'react'

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incGood = () => setGood(good + 1)
    const incNeutral = () => setNeutral(neutral + 1)
    const incBad = () => setBad(bad + 1)

    return (
        <div className="App">
            <h1>give feedback</h1>
            <Button handleClick={incGood} text={'good'} />
            <Button handleClick={incNeutral} text={'neutral'} />
            <Button handleClick={incBad} text={'bad'} />
            <div>
                <h1>Stats</h1>
                <Statistics good={good} neutral={neutral} bad={bad} />
            </div>
        </div>
    );
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>



const Statistics = ({ good, neutral, bad }) => {
    const all = good+neutral+bad;
    const average = all/3
    const positivePercentage = all < 1 ? 0 : (good/all)*100
    return (
        <div>
            <StatisticsLine text={"good"} amount={good}/>
            <StatisticsLine text={"neutral"} amount={neutral}/>
            <StatisticsLine text={"bad"} amount={bad}/>
            <StatisticsLine text={"all"} amount={all}/>
            <StatisticsLine text={"average"} amount={parseFloat(average).toPrecision(4)}/>
            <StatisticsLine text={"positive"} amount={parseFloat(positivePercentage).toPrecision(4)}/>
        </div>
    )
}

const StatisticsLine = ({text, amount}) => {

    return(
        <div>
            <p>{text}: {amount}</p>
        </div>
    )
}

export default App;
