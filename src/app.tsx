import { Console } from 'console';
import React, { useEffect, useState, useMemo, useRef, useReducer } from 'react'
import {
    createMemo,
    useToggle,
    useUpdate
} from './hooks'

interface IState {
    count: number;
    step: number;
}

interface IAction {
    type: ACTION_TYPE,
    payload?: any
}

enum ACTION_TYPE {
    TICK = "tick",
    STEP = "step"
}

const reducer = (state: IState, action: IAction) => {
    const { count, step } = state;
    if (action.type === ACTION_TYPE.TICK) {
        return { count: count + step, step };
    } else if (action.type === ACTION_TYPE.STEP) {
        return { count, step: action.payload }
    } else {
        throw new Error()
    }
}

export default function App(props: any) {
    const initialState = {
        count: 0,
        step: 1
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: ACTION_TYPE.TICK })
        }, 1000)

        return () => clearInterval(id)
    }, [dispatch])

    return (
        <div>
            <h1>{state.count}</h1>
            <input value={state.step} onChange={e => dispatch({ type: ACTION_TYPE.STEP, payload: Number(e.target.value) })} />
        </div>
    );
}