import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Route} from 'react-router-dom'
import {Header} from './components'
import {Home, Cart} from './pages'

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('db.json').then(({data}) => setPizzas(data.pizzas))
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route exact path='/'>
          <Home items={pizzas} />
        </Route>
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  )
}

export default App
