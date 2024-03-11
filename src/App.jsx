import { useState } from 'react'

import viteLogo from '/vite.svg'
import TaskList from './components/TaskList';
import LiveSearchComponent from './components/Search';

const App = () => {
  return (
    <div>
      { <TaskList/> }
       { <LiveSearchComponent/> }
    </div>
  );
};

export default App;
