import React from "react";
import { useParams } from "react-router-dom";
import Calendar from "../components/Calendar";

export default function Month() {
    let {id} = useParams();
    return(
        <div style={{display: 'grid', gridTemplateColumns: 'auto 1fr'}}>
            <Calendar monthId={id} />
            <div></div>
        </div>
    )
}