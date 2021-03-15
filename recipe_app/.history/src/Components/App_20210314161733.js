import { useState } from 'react';
import '../App.css';
import RecipeForm from './form'


function App() {
  const [inputText, setInputText] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [forms, setForms] = useState([]);

  return (
    <div className="App">
      <div>
       
      </div>
    </div>
  );
}

export default App;
