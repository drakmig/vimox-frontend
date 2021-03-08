import React from 'react';
import { Svg } from '../styled';
import type { SvgProps } from '../types';

export const ChevronRight = (props: SvgProps) => (
  <Svg
    width='1em'
    height='1em'
    viewBox='0 0 1024 1024'
    fill='currentColor'
    {...props}
  >
    <path d='M696.672 534.016l-2.944 3.392-2.496 2.24-247.008 249.92a34.976 34.976 0 01-49.92 0 36.032 36.032 0 01-2.944-47.136l2.976-3.392L618.72 512 394.336 284.96a36.032 36.032 0 01-2.976-47.104l2.976-3.392a34.976 34.976 0 0149.92 0L691.232 484.32l2.496 2.272c6.368 6.432 9.792 14.72 10.272 23.136v4.512a35.84 35.84 0 01-7.328 19.776z' />
  </Svg>
);
