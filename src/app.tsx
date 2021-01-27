import React, { useEffect, useState, useMemo } from 'react'
import {
    createMemo,
    useToggle
} from './hooks'

export default function App(props: any) {
    const [on, toggle] = useToggle(true)
    const [a, setA] = useState(1)
    return (
        <div>
            <div>{a}</div>
            <div>{on ? 'ON' : 'OFF'}</div>
            <button onClick={() => toggle()}>Toggle</button>
            <button onClick={() => toggle(true)}>set ON</button>
            <button onClick={() => toggle(false)}>set OFF</button>
            <button onClick={() => setA(prev => prev + 1)}>add</button>
        </div>
    )
}