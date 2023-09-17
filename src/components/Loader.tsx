import React from 'react';
import { RingLoader } from 'react-spinners';

export function Loader({
  color = '#7082a1',
  size = 100,
  loading = true,
}: {
  color?: string;
  size?: number | string;
  width?: number | string;
  loading?: boolean;
}) {
  return (
    <RingLoader
      color={color}
      loading={loading}
      size={size}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
}
