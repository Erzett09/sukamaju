import { useState } from 'react'
import Main from './page/main'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RolePage from './page/Authentication/role'
function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element=<Main/> />
          <Route path='/role' element=<RolePage/> />
        </Routes>
      </Router>
  )
}

export default App
