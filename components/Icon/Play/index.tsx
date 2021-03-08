import React from 'react';
import { Svg } from '../styled';
import type { SvgProps } from '../types';

export const Play = (props: SvgProps) => (
  <Svg
    width='1em'
    height='1em'
    viewBox='0 0 1024 1024'
    fill='currentColor'
    {...props}
  >
    <path d='M784 816a32 32 0 1064 0 32 32 0 10-64 0zM512 968a456 456 0 11395.76-229.36 32 32 0 01-55.52-32A392 392 0 10706.8 852.08a32 32 0 1132 55.52A456 456 0 01512 968zm-88-270.8a48 48 0 01-48-48V381.28a48 48 0 0172-41.6l232 134a48 48 0 010 83.12L448 690.72a48 48 0 01-24 6.48zm16-288v212.24l184-106.16zm-24-14z' />
  </Svg>
);
