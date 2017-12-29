// @flow

import React, { type Node } from 'react';

export type Props = {
    children: Node
};

const Wrapper = ({ children }: Props) => <section className="todoapp">{children}</section>;

export default Wrapper;
