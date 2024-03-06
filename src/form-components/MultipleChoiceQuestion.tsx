import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentAnswer, setCurrentAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="mcanswer">
                <Form.Label>Choose an Answer:</Form.Label>
                <Form.Select value={currentAnswer} onChange={updateAnswer}>
                    {options.map((curr) => (
                        <option key={curr} value={curr}>
                            {curr}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {expectedAnswer === currentAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
