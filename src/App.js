import {Switch, Route, Redirect} from 'react-router-dom'

import TaskManagement from './components/TaskManagement'
import Summary from './components/Summary'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={TaskManagement} />
      <Route exact path="/summary" component={Summary} />
      <Route path="/notfound" component={NotFound} />
      <Redirect to="/notfound" />
    </Switch>
  </>
)

export default App
