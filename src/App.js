import React, { useState, useEffect } from "react";
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'

const App = () => {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setRobots(users) });
    // console.log(count)
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  return !robots.length ?
    <h1 className="tc">Runing</h1> :
    (
      <div className="tc">
        <h1>Robots</h1>
        <SearchBox searchChange={onSearchChange} />
        <button className="pa3" onClick={() => setCount(count + 1)}>Search</button>
        <CardList robots={filteredRobots} />
      </div>
    );
}

export default App;