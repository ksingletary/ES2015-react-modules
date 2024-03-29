import { useState } from 'react'
import fruit from './food'
import { Choice, Remove } from './helpers'

function App() {
  const [count, setCount] = useState(0)
  const items = fruit

  const item = Choice(items)

  console.log(`I'd like one ${item}`)
  console.log(`Here you go: ${item}`)
  console.log(`Delicious! May I have another?`)

  Remove(fruit, item);
  console.log(`I'm sorry, we're all out. We have ${fruit} left.`)


  return (
    <>
      <h1>We have these fruits left</h1>
      <div>
        <p>{fruit.map(f => f)}</p>
      </div>
      The chosen fruit is {item}
      
    </>
  )
}

export default App
