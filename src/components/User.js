import { useEffect, useState } from "react";
const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("NAMASTE RECAT OP");
        }, 1000);
        console.log("USEFEECT");

        return () => {
            clearInterval(timer);
            console.log("THIS IS SAME AS COMPOENENT DID UNMOUNT");
        };
    }, []);
    console.log("render");
    return (
        <div className="user-card">
            <h2>Count = {count}</h2>
            <h2>Count2 = {count2}</h2>
            <h2>Name: {name}</h2>
            <h2>Location: Ahmedabad</h2>
            <h2>Contact: 9328772732</h2>
            <h2>Social Media: dharmikchavda07</h2>

        </div>
    )
}

export default User;