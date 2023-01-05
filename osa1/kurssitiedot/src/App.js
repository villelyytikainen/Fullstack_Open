

function App() {
    const course =
    {
        name: 'Half Stack application development',
        parts: [
            {
                part: 'Fundamentals of React',
                exercises: 10
            },
            {
                part: 'Using props to pass data',
                exercises: 7
            },
            {
                part: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
}

const Header = ({ course }) => {
    return (
        <h1>{course}</h1>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            <Part part={parts[0].part} exercises={parts[0].exercises} />
            <Part part={parts[1].part} exercises={parts[1].exercises} />
            <Part part={parts[2].part} exercises={parts[2].exercises} />
        </div>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum += part.exercises, 0)
    console.log(total)
    return (
        <p>Number of exercises {total}</p>
    )
}

const Part = ({ part, exercises }) => {
    return (
        <p>
            {part} {exercises}
        </p>
    )
}

export default App;
