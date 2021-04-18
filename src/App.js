import React, {useState} from 'react'
import Counter from './Counter'
import CounterHooks from './counterHooks'

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('green')
  return (
  <ThemeContext.Provider value={{backgroundColor: theme}}>
    Counter class
    <Counter initialCount={0}/>

    Counter funkytion
    <CounterHooks initialCount={9}/>
    <button onClick={()=> setTheme(prevTheme => {
    return prevTheme==='red'? 'blue': 'red'
    })}>Toggle Theme</button>
    
  </ThemeContext.Provider>
  )
}

export default App;
