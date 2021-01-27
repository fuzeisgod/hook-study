/**
 * React实用程序钩子，返回一个可以重新刷新组件的方法。
 */

import { useState } from 'react'

const useUpdate = () => {
    const [, setState] = useState<boolean>(false)
    return () => setState((prev: boolean) => {
        return !prev
    })
}

export default useUpdate