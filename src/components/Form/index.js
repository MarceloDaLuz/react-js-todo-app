import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form, Select, Selector } from './style';
import InputAddOn from '../Input';
const FormElement = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        let value = e.target.value;
        setInputText(value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: uuidv4()
            }
        ]);
        setInputText('')
    }

    const statusHandler = (e) => {
        let value = e.target.value;
        setStatus(value)
    };

    return (
        <Form>
            <InputAddOn inputValue={inputText} onChange={inputTextHandler} btnClick={submitTodoHandler} />
            <Select>
                <Selector onChange={statusHandler} name="todos">
                    <option value="all">Todos</option>
                    <option value="completed">Completos</option>
                    <option value="uncompleted">Incompletos</option>
                </Selector>
            </Select>
        </Form>
    );

}

export default FormElement