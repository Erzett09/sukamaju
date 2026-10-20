import { useState } from 'react'
import Main from './page/main'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RolePage from './page/Authentication/role'
import RegisterPageOwner from './page/Authentication/owner/register'
function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element=<Main/> />
          <Route path='/role' element=<RolePage/> />
          <Route path='/auth/reg/owner' element=<RegisterPageOwner/> />
          <Route path='/auth/log/owner' element="l" />
        </Routes>
      </Router>
  )
}

export default App
