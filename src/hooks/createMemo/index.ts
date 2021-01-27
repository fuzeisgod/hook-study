/**
 * 钩子（Hook）工厂，接收一个要被记忆的函数，返回一个带有记忆功能的 React 钩子
 * 该钩子接收到相同的参数时返回和原始函数相同的结果。
 */

import { useMemo, FC } from 'react';

const createMemo = (fn: FC) => (...args: any) => useMemo(() => fn(args), args)





export default createMemo;