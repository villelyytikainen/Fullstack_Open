const Filter = ({newFilter, handleFilterChange}) => {
    return(
        <div>
            search: <input value={newFilter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter;