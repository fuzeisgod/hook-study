/**
 * React 状态钩子，用于追踪数值型值。
 * 
 * 传入：一个数值型值
 * 返回一个包含了操作传入值方法的数组 [value, {inc, dec, get, set, reset}] // [值， {加， 减， 取值， 设值， 重置（设置初始值）}]
 */

import useGetSet from '../useGetSet'
import { useCallback } from 'react'

// 数据操作对象类型
interface CounterActions {
    inc: (value?: number) => void;
    dec: (value?: number) => void;
    get: () => number;
    set: (value: number) => void;
    reset: (value?: number) => void;
}

const useCounter = (initialValue: number = 0): [number, CounterActions] => {
    const [get, set] = useGetSet(initialValue)
    const inc = useCallback((value: number = 1) => set(get() + value), []);
    const dec = useCallback((value: number = 1) => set(get() - value), []);
    // 使用 useCallback， 再次渲染时不会再次创建reset方法，usecallback内部的方法捕获了变量 initialValue，所以再次执行 reset 方法（不传参）的时候可以记住上一次传入的值作为 新的 initialValue,从而正确的执行重置操作
    const reset = useCallback((value: number = initialValue) => {
        initialValue = value
        set(value)
    }, [])


    return [get(), { inc, dec, get, set, reset }]
}

export default useCounter