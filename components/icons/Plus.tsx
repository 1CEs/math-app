import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function Plus(props: SvgProps) {
	return (<Svg width={12} height={12} viewBox="0 0 12 12" {...props}><Path fill="currentColor" d="M6 1.75a.75.75 0 0 1 .75.75v2.75H9.5a.75.75 0 0 1 0 1.5H6.75V9.5a.75.75 0 0 1-1.5 0V6.75H2.5a.75.75 0 0 1 0-1.5h2.75V2.5A.75.75 0 0 1 6 1.75"></Path></Svg>);
}