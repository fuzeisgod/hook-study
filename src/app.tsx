import { Console } from 'console';
import React, { useEffect, useState, useMemo, useRef, useReducer } from 'react'
import {
    createMemo,
    useToggle,
    useUpdate,
    useGetSet,
    useCounter,
    useList
} from './hooks'

export default function App(props: any) {
    const [list, {set, push}] = useList();

  return (
    <div>
      <div>{list.join(',')}</div>
      <button onClick={() => set([])}>Reset</button>
      <button onClick={() => push(Date.now())}>Push</button>
    </div>
  );
}