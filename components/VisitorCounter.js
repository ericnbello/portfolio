import React, { useEffect, useState } from "react"
import axios from "axios";
export default function VisitorCounter() {
    const COUNT_API = `https://6gl89wftdk.execute-api.us-east-1.amazonaws.com/Prod/counter`;

    const [count, setCount] = useState();    

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${COUNT_API}`, true);

    xhr.onload = function () {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          setCount(xhr.responseText);

        }
      }
    };

    xhr.send(null);

    useEffect(() => {
        async function getCount() {
            // You can await here
            const response = await axios(`${COUNT_API}`);
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