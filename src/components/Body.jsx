import React from "react";
import Calendar from "./Calendar";
import moment from "moment";

export default function Body() {
    const todayMonthId = moment().add().get("M");
    return(
        <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr'}}>
            <Calendar monthId={todayMonthId}/>
            <div></div>
        </div>
    )
}