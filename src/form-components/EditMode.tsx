import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-switch"
                label="Edit"
                checked={editing}
                onChange={updateEditing}
            />
            {name} is {isStudent ? "a student." : "not a student."}
            {editing && (
                <div>
                    <Form.Group controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>
                    <Form.Check
                        id="edit-student"
                        label="Student"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                </div>
            )}
        </div>
    );
}
