import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    const copy = [...votes]


    const incVotes = () => {
        copy[selected]++
        setVotes(copy)
    }
    const incSelected = () => setSelected(Math.floor(Math.random() * anecdotes.length))

    return (
        <div>
            {anecdotes[selected]}
            <p>{copy[selected]}</p>
            <div>
                <Button text={'vote'} handleClick={incVotes} />
                <Button text={'next anecdote'} handleClick={incSelected} />
            </div>
            <MostVotes anecdotes={anecdotes} votes={votes} />
        </div>
    )
}

const Button = ({ text, handleClick }) => {

    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const MostVotes = ({ anecdotes, votes }) => {
    const mostVoteAmount = Math.max(...votes)
    const index = votes.indexOf(mostVoteAmount)
    const anecdote = anecdotes[index]
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdote}</p>
            <p>has {mostVoteAmount} votes</p>
        </div>
    )
}

export default App