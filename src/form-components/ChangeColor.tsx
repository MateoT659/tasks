import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((curr) => (
                <Form.Check
                    inline
                    key={curr}
                    type="radio"
                    name="color"
                    value={curr}
                    label={
                        <span style={{ backgroundColor: curr }}>{curr}</span>
                    }
                    id={"color-" + curr}
                    checked={curr == color}
                    onChange={updateColor}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
