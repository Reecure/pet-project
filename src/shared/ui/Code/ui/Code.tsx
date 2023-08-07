import React, { FC, memo } from 'react';

interface Props {
    children: React.ReactNode
}

const Code: FC<Props> = ({ children }) => (
    <pre>
        <code>{children}</code>
    </pre>

);

export default memo(Code);
