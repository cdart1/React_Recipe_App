import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Ingredient from './Ingredient'

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
                    <Card.Header>ingredients</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Ingredient ingredient="something" />
                
            </Form.Group>
            <Form.Group>
                <Form.Label>Instructions:</Form.Label><br></br>
                <Form.Control as="textarea" rows={25} />    
            </Form.Group>
        </Form>
    );
} 

export default RecipeForm