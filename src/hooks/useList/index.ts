/**
 * React 状态钩子，用于追踪数组型值。
 * 传入：一个数组（默认空数组）
 * 输出：返回一个包含传入数组操作方法的数组 [list, {set, push}] // [数组，{设置数组， 插入数据}]
 */
interface Actions {
    
}

const useList = <T>(initialArray:T[]) => {

    return [initialArray, {}]
}

export default useList