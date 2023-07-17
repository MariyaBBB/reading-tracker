import moment from "moment";
import React from "react";
import { Form } from "react-bootstrap";

export default function TrackingEvent({date}) {
    const today = moment().add();
    const isCurrentDay = (day) => {
        return day.date() === today.date() && day.month() === today.month();
    }

    const isCurrentMonth = () => {
        return date.month() === today.month();
    }
    
    return (
        <div >
            {isCurrentMonth() ? 
                <Form date={date.date()} className="tracker">
                    <Form.Label className={isCurrentDay(date) ? "current-date": ""}>{date.date()}</Form.Label> 
                    <Form.Control className="input"></Form.Control>
                </Form> 
            : <></>}
        </div>
    )
}