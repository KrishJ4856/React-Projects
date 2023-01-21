import React, {useState} from 'react';
import Search from './components/Search';
import Results from './components/Results';
import './assets/main.css'

export default function App() {
  const [results, setResults] = useState(null)

  function generateResults(inputText){
    const inputArr = inputText.trim().toLowerCase().split(" ");
    let inputStr = "";
    inputArr.forEach(word => inputStr += (word + " + "))
    inputStr = inputStr.slice(0, inputStr.lastIndexOf('+')-1);

    fetch(`https://pixabay.com/api/?key=33008701-7fe4bc773f56525e422fd8860&q=${inputStr}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => setResults(data))
    setResults()
  }

  return (
    <div id='App'>
      <Search generateResults={generateResults}/>
      <Results results={results}/>
    </div>
  )
}
