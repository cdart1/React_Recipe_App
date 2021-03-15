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
        <RecipeForm inputText={inputText} setInputText={setInputText}
                    ingredients={ingredients} setIngredients={setIngredients}
                    forms={forms} setForms={setForms}/>
      </div>
    </div>
  );
}

export default App;
