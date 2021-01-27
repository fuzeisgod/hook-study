/**
 * React 状态钩子，用于追踪布尔型值。
 * 接收：可以不传，也可以传一个可以转以成布尔值的值
 * 返回：[当前布尔值，更改布尔值的方法]
 */

import { useCallback, useState } from 'react'

export type UseToggle = (state: boolean) =>
    [boolean, (nextValue?: boolean) => void]

const useToggle: UseToggle = state => {
    const [value, setValue] = useState<boolean>(state)

    // 方法缓存，方法不用每次都随着传入的 state 的改变而重新创建。
    const toggle = useCallback((nextValue?: boolean) => {
        if (typeof nextValue !== 'undefined') {
            // `!!`作用：将传入值转为boolean类型的值
            setValue(!!nextValue);
            return;
        }
        setValue(prev => !prev)
    }, [setValue])

    return [value, toggle];
}

export default useToggle;