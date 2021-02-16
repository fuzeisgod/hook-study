import { Console } from 'console';
import React, { useEffect, useState, useMemo, useRef, useReducer } from 'react'
import {
    createMemo,
    useToggle,
    useUpdate,
    useGetSet,
    useCounter,
    useList,
    useMap
} from './hooks'

export default function App(props: any) {
  const [map, {set, reset}] = useMap({
    hello: 'there',
  });

  return (
    <div>
      <pre>{JSON.stringify(map, null, 2)}</pre>
      <button onClick={() => set(String(Date.now()), (new Date()).toJSON())}>Add</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}