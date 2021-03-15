import React from 'react';
import Ingredient from './Ingredient';
import {Form, Button, ListGroup, Card} from 'react-bootstrap';

const RecipeForm = ({inputText,setInputText, 
                     ingredients, setIngredients,
                     forms, setForms}) => {
    
const inputTextHandler = (e) => {
    setInputText(e.target.value)
}

const addIngredientHandler = () => {
    setIngredients([...ingredients, inputText])
    
}


    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Recipe Name</Form.Label><br></br>
                <Form.Control type="text" placeholder="Banana bread"/>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Ingredient" value={inputText} onChange={inputTextHandler}/>
                <Button primary lg onClick={addIngredientHandler}>+</Button>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>List of Ingredients</Card.Header>
                    <ListGroup variant="flush">
                        {ingredients.map(ingredient => 
                            <Ingredient ingredient={ingredient}/>    
                        )}
                    </ListGroup>
                </Card>
            </Form.Group>
            <Form.Group>
                <Form.Label>Instructions:</Form.Label><br></br>
                <Form.Control as="textarea" rows={25} />    
            </Form.Group>
        </Form>
    );
} 

export default RecipeForm