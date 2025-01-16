'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ProjectGraph from './ProjectGraph';

export default function Scene() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        <Suspense fallback={null}>
          <ProjectGraph />
        </Suspense>
      </Canvas>
    </div>
  );
} 