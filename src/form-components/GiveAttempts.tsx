import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(parseInt(event.target.value) || 0);
    }

    return (
        <div>
            <h3>Give Attempts</h3># of attempts left: {attemptsLeft}
            <Form.Group controlId="attemptsLeft">
                <Form.Label>Enter # of attempts you are requesting:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                />
            </Form.Group>
            <Button
                disabled={attemptsLeft == 0}
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
            >
                use
            </Button>
            <Button onClick={() => setAttemptsLeft(attemptsLeft + request)}>
                gain
            </Button>
        </div>
    );
}
