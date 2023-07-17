import moment from "moment";
import React, { useEffect, useState } from "react";
import TrackingEvent from "./TrackingEvent";
import { Button } from "react-bootstrap";

export default function Calendar() {
    const totalDays = 42;
    const weekName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const [startDay, setStartDay] = useState(moment().startOf('month').startOf('week'));
    const [dates, setDates] = useState([]);
    const array =[];
    const day = startDay.clone();

    useEffect(() => {
        while(array.length < totalDays) {
            array.push(day.clone());
            day.add(1, 'day');
        }
        setDates(array);
    },[startDay]);

    return (
        <>
            <div className="mt-3 ms-5" >
                <div className="month-menu">
                    <Button  variant="secondary">Пред. месяц</Button>
                    <h2>Июль</h2>
                    <Button variant="secondary">След. месяц</Button>
                </div>
                <div className="week-names">
                    {weekName.map(w => (
                        <h5>
                            {w}
                        </h5>
                    ))}
                </div>
                <div className="tracking-table">
                    {dates.map(el => (
                        <div>
                            <TrackingEvent 
                                date={el} 
                                />
                        </div>
                    ) )}
                </div>
            </div>
        </>
    )
}