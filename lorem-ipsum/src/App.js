import { useState } from 'react';
import text from './data'

function App() {

  const [paragraphs, setParagraphs] = useState([])
  const [number, setNumber] = useState(0)

  const submit = (e) => {
    e.preventDefault()
    let selectedNumber = Number(number)
    if(selectedNumber > 6){
      selectedNumber = 6
    }
    if(selectedNumber < 1){
      selectedNumber = 1
    }
    setParagraphs(text.slice(0, selectedNumber))
  }


  return (
    <div className="App">

    <section className="center">

      <h3>Tired of boring lorem ipsum?</h3>
      <form className="form" onSubmit={submit}>
        <label htmlFor="input">Paragraphs:</label>

        <input 
          type="number"
          id='input'
          className='input'
          value={number}
          onChange={(e) => {setNumber(e.target.value)}}
        ></input>

        <button className="btn" type='submit'>Generate</button>
      </form>

      <article className="text">
        {
          paragraphs.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </article>

    </section>

    </div>
  );
}

export default App;
