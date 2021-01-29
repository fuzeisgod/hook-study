import { Console } from 'console';
import React, { useEffect, useState, useMemo, useRef, useReducer } from 'react'
import {
    createMemo,
    useToggle,
    useUpdate,
    useGetSet,
    useCounter
} from './hooks'

export default function App(props: any) {
    const [value, { inc, dec, get, set, reset }] = useCounter(5);

    return (
        <div>
            <div>{value} is {get()}</div>
            <button onClick={() => inc()}>Increment</button>
            <button onClick={() => dec()}>Decrement</button>
            <button onClick={() => inc(5)}>Increment (+5)</button>
            <button onClick={() => dec(5)}>Decrement (-5)</button>
            <button onClick={() => set(100)}>Set 100</button>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => reset(25)}>Reset (25)</button>
        </div>
    );
}