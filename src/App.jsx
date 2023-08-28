import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [textInput, setTextInput] = useState('');
  const [datas, setData] = useState([]);

  const timeToSearch = useRef(null);

  const FetchApi = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${textInput.toLocaleLowerCase()}`)
    .then((response) => response.json())
    .then((data) => setData(data))
    console.log('dados: ',datas)
  }
  
  useEffect(() => {
    if(timeToSearch.current ){
      clearInterval(timeToSearch.current)
    }
    timeToSearch.current = setTimeout(FetchApi, 1500)

    return () => clearInterval(timeToSearch.current)

  }, [textInput])

  const handleSearch = (event) =>{
    event.preventDefault();
    FetchApi();
  }
    
  const setTextInputApiChange = (event) => {
    const newText = event.target.value;
    setTextInput(newText);
    console.log('Texto do input: ',newText)
  }

  return (
    <>
      <div>
      </div>
      <h1>UseRef no React</h1>
      <div className="card">
        <form onSubmit={handleSearch}>
        <input type="text" name='name' value={textInput} onChange={setTextInputApiChange} />
        </form>
        <div>

        {!datas.name ?<span>{'Sem pokemon'}</span> : <h3>{datas.name}</h3>}
        </div>
      </div>
    </>
  )
}

export default App
