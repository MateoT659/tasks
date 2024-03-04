import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    return (
        <div>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                    setInProgress(true);
                }}
                disabled={inProgress || attempts == 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            Attempts remaining: {attempts}
            {inProgress ? <div>In Progress</div> : <div>Not In Progress</div>}
        </div>
    );
}
