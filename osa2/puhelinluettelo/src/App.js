import { useState } from 'react'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: 123123
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addNumber = (event) => {
        const newPersons = []
        event.preventDefault()
        console.table({
            name: newName,
            number: newNumber
        })

        if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
            alert(`${newName} already exists in the phonebook`)
        } else {
            newPersons.push(...persons,
                {
                    name: newName,
                    number: newNumber
                })
            setPersons(newPersons)
        }

    }
    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNumber}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                <Persons persons={persons} />
            </ul>
        </div>
    )

}

export default App