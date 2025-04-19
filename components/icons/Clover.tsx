import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function MdiLuck(props: SvgProps) {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <Path fill="currentColor" d="M12 11.18c3.3-3 5-4.54 5-6.49C17 3.19 15.75 2 14.25 2c-.86 0-1.68.36-2.25 1c-.57-.64-1.39-1-2.31-1C8.19 2 7 3.25 7 4.75c0 1.89 1.7 3.43 5 6.43m-.82.82c-3-3.3-4.54-5-6.49-5C3.19 7 2 8.25 2 9.75c0 .86.36 1.68 1 2.25c-.64.57-1 1.39-1 2.31C2 15.81 3.25 17 4.75 17c1.89 0 3.43-1.7 6.43-5m1.65 0c2.99 3.3 4.53 5 6.48 5c1.5 0 2.69-1.25 2.69-2.75c0-1.89-1.7-3.43-5-6.43">
            </Path>
        </Svg>
    );
}