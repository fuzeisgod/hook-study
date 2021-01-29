/**
 * 问题：如下组件，快速点击时输出的都为0。
 * 分析：第一次点击时触发click事件，由于set方法异步执行，函数状态cnt还未改变，不会触发组件重新执行渲染，此时由于快速点击又触发了点击事件，此时点击事件捕获的还是初始state，所以一直输出0。
 * 解决方案：不要从state中获取状态和改变状态，从一个ref对象里，获取（get）or 改变（set）状态值，因为 ref 对象是引用值，所以每次 执行 点击事件的时候获取到的都是对象中的新的状态。
 * 
 * export default function App(props: any) {
        const [cnt, set] = useState(0);
        const onClick = () => {
            setTimeout(() => {
                console.log(cnt)
                set(cnt + 1)
            }, 1_000);
        };

        return (
            <button onClick={onClick}>Clicked: {cnt}</button>
        );
    }

    useGetSet:
    传入一个你需要控制的状态，
    返回一个它的 get 和 set 方法
 */

import { useRef, useCallback, useState } from 'react'
import useUpdate from '../useUpdate'

const useGetSet = <T>(initialValue: T): [() => T, (value: T) => void] => {
    const state = useRef(initialValue)
    const update = useUpdate()
    // 使用 useCallback 可以避免在组件重新渲染时再次创建get方法，但是也会使被useCallback包裹的函数捕获第一次创建时组件内的state状态，所以这里要使用useRef，让函数捕获一个引用对象。
    const get = useCallback(() => {
        return state.current
    }, [])

    const set = useCallback((value: T) => {
        state.current = value
        // 由于没有改变组件的state，不会触发组件的刷新渲染，也就无法触发get（）新数据的需求，所以要手动刷新
        update()
    }, [])


    return [get, set];
}

export default useGetSet