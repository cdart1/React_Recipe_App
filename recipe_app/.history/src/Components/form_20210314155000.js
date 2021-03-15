import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const RecipeForm = () => {

    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Recipe Name</Form.Label><br></br>
                <Form.Control type="text" placeholder="Banana bread"/>
            </Form.Group>
            <Form.Group>
                <input type='text'>Ingredient</input>
                <Button variant="primary">Primary</Button>{' '}
                {/* <button onClick>Add Ingredient</button> */}
                {/* <Form.Label>Ingredients List</Form.Label><br></br>
                <Form.Control type="text" placeholder="Recipe Name" /> */}
            </Form.Group>
            <Form.Group>
                <Form.Label>Instructions:</Form.Label><br></br>
                <Form.Control as="textarea" rows={25} />    
            </Form.Group>
        </Form>
    );
} 

export default RecipeForm