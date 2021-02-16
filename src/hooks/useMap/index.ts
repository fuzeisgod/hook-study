/**
 * React 状态钩子，用于追踪对象型值。
 * 返回一个对象的当前状态和控制对象的方法的数组
 * 方法列表：
 *  get：取某一key对应的值
 *  set：设置某一key的值
 *  remove：移除某一key
 *  reset：重置对象
 */

import { useState } from 'react'

interface Actions<k, v> {
    get: (key: k) => any;
    set: (key: k, value: v) => void;
    remove: (key: k) => void;
    reset: () => void;
}

const useMap = <T extends { [key: string]: any }>(initialMap: any = {}): [T, Actions<string, any>] => {
    const [map, set] = useState(initialMap)

    return [
        map,
        {
            get: (key: string) => map[key],
            set: (key: string, entry: any) => {
                set({
                    ...map,
                    [key]: entry
                })
            },
            remove: (key: string) => {
                const { [key]: value, ...rest } = map;
                set(rest)
            },
            reset: () => set(initialMap)
        }
    ]
}

export default useMap;