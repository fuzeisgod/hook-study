/**
 * React钩子返回状态和async函数或返回promise的函数的回调。 状态与useAsync的形状相同。
 */

import { DependencyList } from 'react'

const useAsyncFn = <T>(fn: () => Promise<T>, deps: DependencyList = []) => {

}

export default useAsyncFn