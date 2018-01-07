// @flow

import { type SideEffect, type Reduce } from 'react-stateful-component';

export const combineSideEffects = <A>(...sideEffects: Array<SideEffect<A>>): SideEffect<A> => {
    return (reduce: Reduce<A>) => {
        sideEffects.forEach(sideEffect => {
            sideEffect(reduce);
        });
    };
};
