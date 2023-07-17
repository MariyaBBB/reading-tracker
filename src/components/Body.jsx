import React from "react";
import Calendar from "./Calendar";

export default function Body() {
    return(
        <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr'}}>
            <Calendar />
            <div></div>
        </div>
    )
}