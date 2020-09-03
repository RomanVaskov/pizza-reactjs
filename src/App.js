import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {Header} from './components'
import {Home, Cart} from './pages'
import {setPizzas} from './redux/actions/pizzas'

// function App() {
//   const [pizzas, setPizzas] = useState([])

//   useEffect(() => {
//     axios.get('db.json').then(({data}) => setPizzas(data.pizzas))
//   }, [])

//   return (
//     <div className='wrapper'>
//       <Header />
//       <div className='content'>
//         <Route exact path='/'>
//           <Home items={pizzas} />
//         </Route>
//         <Route exact path='/cart' component={Cart} />
//       </div>
//     </div>
//   )
// }

class App extends Component {
  componentDidMount() {
    axios.get('db.json').then(({data}) => this.props.setPizzas(data.pizzas))
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Route exact path='/'>
            <Home items={this.props.items} />
          </Route>
          <Route exact path='/cart' component={Cart} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  }
}

const mapDispatchToProps = {
  setPizzas,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
