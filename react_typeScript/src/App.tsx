import { useContext} from 'react'
import countContext from './context'



const App = () => {

  const {state, increment, decrement} = useContext(countContext)

  return (
    <div className='container'>
      <div className="content">
          <h1>{state}</h1>
          <div className='buttons'>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
          </div>
      </div>
     
    </div>
  )
}

export default App