import moment from "moment";
import React, { useEffect, useState } from "react";
import TrackingEvent from "./TrackingEvent";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Calendar({monthId}) {
    const totalDays = 42;
    const weekName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const month = moment().month(monthId).startOf('month').startOf('week') ;
    const [dates, setDates] = useState([]);
    const array =[];
    const day = month.clone();
    const nextMonth = +monthId+1;
    const prevMonth = +monthId-1;
    console.log(nextMonth)
    useEffect(() => {
        while(array.length < totalDays) {
            array.push(day.clone());
            day.add(1, 'day');
        }
        setDates(array);
    },[monthId]);

    return (
        <>
            <div className="mt-3 ms-5" >
                <div className="month-menu">
                    <Button 
                        as={Link} 
                        to={`/month/${prevMonth}`} 
                        className={prevMonth < 0 ? "invisible": "visible pt-2 offset-0"} 
                        variant="secondary">
                            Пред. месяц
                    </Button>
                    <h2>{monthName[monthId]}</h2>
                    <Button 
                        as={Link} 
                        to={`/month/${nextMonth}`} 
                        className={nextMonth > 11 ? "invisible": "visible pt-2"} 
                        variant="secondary">
                            След. месяц
                    </Button>
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
                                month={monthId}
                                />
                        </div>
                    ) )}
                </div>
            </div>
        </>
    )
}