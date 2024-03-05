import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DHProps {
    dhValue: number;
    setDhValue: (val: number) => void;
}

function Doubler({ dhValue, setDhValue }: DHProps): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: DHProps): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            {dhValue}
            <h3>Double Half</h3>
            <div>
                The current value is: {dhValue}
                <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
                <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
            </div>
        </div>
    );
}
