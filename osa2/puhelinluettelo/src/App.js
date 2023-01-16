import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: 123123
        }
    ])

    const [filtered, setFiltered] = useState([])
    const [newFilter, setNewFilter] = useState('')
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

    const handleFilterChange = (event) => {
        const filter = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
        console.log(filter)
        setFiltered(filter)
        setNewFilter(event.target.value)
    }
    const handleNameChange = (event) => setNewName(event.target.value)
    const handleNumberChange = (event) => setNewNumber(event.target.value)

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
            <PersonForm addNumber={addNumber}
                        newName={newName}
                        newNumber={newNumber}
                        handleNameChange={handleNameChange}
                        handleNumberChange={handleNumberChange}/>
            <h2>Numbers</h2>
            <ul>
                {newFilter.length > 0 ? <Persons persons={filtered} /> : <Persons persons={persons} />}
            </ul>
        </div>
    )
}

export default App