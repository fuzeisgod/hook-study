/**
 * React 状态钩子，用于追踪数组型值。
 * 传入：一个数组（默认空数组）
 * 输出：返回一个包含传入数组操作方法的数组 [list, {set, clear, updateAt, remove, push, filter, sort}] // [数组，{设置数组， 清除数组，更新指定项， 移除指定项， 插入数据， 筛选数组， 数组排序}]
 */
import { useState } from 'react'

interface Actions<T> {
    set: (list: T[]) => void;
    clear: () => void;
    updateAt: (index: number, item: T) => void;
    remove: (index: number) => void;
    push: (item: T) => void;
    filter: (fn: (value: T) => boolean) => void;
    sort: (fn?: (a: T, b: T) => number) => void
}

const useList = <T>(initialList: T[] = []): [T[], Actions<T>] => {
    const [list, set] = useState<T[]>(initialList)

    return [list, {
        set,
        clear: () => set([]),
        // slice 方法返回一个新数组，包含从(start<=) && (<end)的新数组，通过扩展运算符（...）展开数组
        updateAt: (index, entry) => set(currentList => [
            ...currentList.slice(0, index), entry, ...currentList.slice(index + 1)
        ]),
        remove: (index) => set(currentList => [
            ...currentList.slice(0, index), ...currentList.slice(index + 1)
        ]),
        push: (entry) => set(currentList => [
            ...currentList, entry
        ]),
        // filter 创建一个新数组，新数组中都是通过 fn 检查的元素
        filter: (fn) => set(currentList => currentList.filter(fn)),
        // 由于 sort 会在原数组进行排序，所以要先克隆一个新数组，在新数组上进行排序
        sort: (fn?) => set(currentList => [...currentList].sort(fn))
    }]
}

export default useList