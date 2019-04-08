import  React, { useState, useEffect } from 'react';

function Footer() {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');

    useEffect(() => {
        document.title = `you clicked ${count} times!`;
    })

    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <hr/>
            <p>我最爱吃的水果是{fruit}</p>
            <button onClick={() => setFruit('pineapple')}>现在变成菠萝了</button>


        </div>
    )
}


export default Footer;