import { useRef } from "react";

export const GROUND_ID: string = 'studio-ground';

export function GroundComponent() {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <div
      id={GROUND_ID}
      ref={ref}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 280,
        bottom: 0,
        transition: 'background-color 300ms ease',
        backgroundColor: 'var(--gray-10)',
        overflow: 'hidden',
      }}>

    </div>
  )
}