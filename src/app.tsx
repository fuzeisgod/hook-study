import React, { useEffect, useState, useMemo } from 'react'
import {
    createMemo,
    useToggle,
    useUpdate
} from './hooks'

export default function App(props: any) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(()=>{
            console.log(`you click ${count} times`)
        }, 3000)
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}