import React from "react";

export default function Calendar() {
    const weekName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const week = [1, 2, 3, 4, 5, 6, 7];
    return (
        <>
            <div className="mt-3 ms-5" >
                <div style={{display: 'grid', gridTemplateColumns: "repeat(7, auto)", gap: '10px'}}>
                    {weekName.map(w => (
                        <h5>
                            {w}
                        </h5>
                    ))}
                </div>
                <div style={{display: 'grid', gridTemplateColumns: "repeat(7, auto)", gap: '10px'}}>
                    {week.map(el => (
                        <div>
                            {el}
                        </div>
                    ) )}
                </div>
            </div>
        </>
    )
}