import React from 'react';
import ReactLoading, { LoadingType } from 'react-loading';

export function Loader({
  type = 'balls',
  color = '#7082a1',
  height = 10,
  width = '50%',
}: {
  type?: LoadingType;
  color?: string;
  height?: number | string;
  width?: number | string;
}) {
  return (
    <ReactLoading type={type} color={color} height={height} width={width} />
  );
}
