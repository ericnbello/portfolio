import React, { useEffect, useState } from "react"
// import { set } from "cypress/types/lodash";

export default function VisitorCounter() {
    // const COUNT_API = `https://6gl89wftdk.execute-api.us-east-1.amazonaws.com/Prod/counter`;

    const [count, setCount] = useState();    


    useEffect(() => {
        async function getCount() {
            // You can await here
            const response = await fetch('https://6gl89wftdk.execute-api.us-east-1.amazonaws.com/Prod/counter');
            const data = await response.json();
            console.log(data)
            setCount(data);
        }
        getCount();
    }, []); // Or [] if effect doesn't need props or state

    return (
        <div className="border-2 outline px-4">
            <p>Views: {count}</p>
        </div>
    )
}