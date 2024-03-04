import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [showing, setShowing] = useState<boolean>(false);

    return (
        <div>
            <Button onClick={() => setShowing(!showing)}>Reveal Answer</Button>{" "}
            {showing && <p>42</p>}
        </div>
    );
}
