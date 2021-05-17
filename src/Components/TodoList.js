import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    ListGroup,
    Button,
} from 'react-bootstrap';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import {v1 as uuid} from "uuid";

import './style.css';

export function TodoList() {
    const [items, setItems] = useState([
        { id: uuid(), text: 'Buy eggs' },
        { id: uuid(), text: 'Pay bills' },
        { id: uuid(), text: 'Invite friends over' },
        { id: uuid(), text: 'Fix the TV' },
    ]);
    
    return (
        <div className={"container-fluid"} >
            <h1>React Transition for Adding Items to List</h1>
            <Container style={{ marginTop: '2rem' }}>
                <ListGroup style={{ marginBottom: '1rem'}} className={"w-25 center"}>
                    <TransitionGroup className="todo-list">
                        {items.map(({ id, text }) => (
                            <CSSTransition
                                key={id}
                                timeout={500}
                                classNames="item"
                            >
                                <ListGroup.Item>
                                    <Button
                                        className="remove-btn"
                                        variant="danger"
                                        size="md"
                                        onClick={() =>
                                            setItems(items =>
                                                items.filter(item => item.id !== id)
                                            )
                                        }
                                    >
                                        &times;
                                    </Button>
                                    {text}
                                </ListGroup.Item>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
                <Button
                    onClick={() => {
                        const text = "this is a new item"
                        // const text = prompt('Enter some text');
                        // if (text) {
                        setItems(items => [
                            ...items,
                            { id: uuid(), text },
                        ]);
                        // }
                    }}
                >
                    Add Item
                </Button>
            </Container>
        </div>

    );
}

ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
);
