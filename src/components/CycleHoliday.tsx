import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*
emojis:
🎄 christmas
🥘 cinco de mayo
🐰 easter
🎃 halloween
🎊 new years eve
*/

type Holiday = "🎊" | "🎄" | "🐰" | "🎃" | "🥘";
const alphaOrder: Record<Holiday, Holiday> = {
    "🎄": "🥘",
    "🥘": "🐰",
    "🐰": "🎃",
    "🎃": "🎊",
    "🎊": "🎄"
};

const chronoOrder: Record<Holiday, Holiday> = {
    "🎊": "🐰",
    "🐰": "🥘",
    "🥘": "🎃",
    "🎃": "🎄",
    "🎄": "🎊"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎊");

    return (
        <div>
            <Button onClick={() => setHoliday(alphaOrder[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(chronoOrder[holiday])}>
                Advance by Year
            </Button>
            <p>Holiday: {holiday}</p>
        </div>
    );
}
