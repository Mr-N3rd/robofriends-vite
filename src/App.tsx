import { useState, useEffect, SetStateAction } from 'react'
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import './App.css'

import { Robots } from './types/types';


function App() {

  const [robots, setRobots] = useState<Robots>([]);
  const [searchfield, setSearchfield] = useState('');
  const onSearchChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSearchfield(event.target.value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setRobots(users) });
    console.log(robots)
  }, [])

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  return !robots.length ?
    <h1>Loading</h1> :
    (
      <div className={` bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}>

        <div className={`flex justify-center`}>

          <h1 className={`font-bold py-3`}>RoboFriends</h1>
        </div>
        <div className={`flex justify-center`}>
          <SearchBox searchChange={onSearchChange} />
        </div>
        <div className={`container mx-auto`}>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      </div>
    );
}

export default App;
