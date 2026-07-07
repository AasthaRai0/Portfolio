'use client';

import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

function PureStaticAvatar() {
  // Loading the avatar image directly
  const texture = useLoader(
    THREE.TextureLoader, 
    'avatar.png' // Ensure this path is correct relative to the public folder
  );

  return (
    // Centered group with precise alignment
    <group position={[0, 0, 0]}>
      <mesh>
        {/* Adjusted sizing dimensions for a perfectly centered image frame */}
        <planeGeometry args={[1.2, 1.2]} />
        <meshStandardMaterial 
          map={texture} 
          side={THREE.DoubleSide}
          transparent={true}
          alphaTest={0.8} // Removes the pure white background parts entirely
          roughness={0.5}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

export default function AvatarCharacter3D() {
  return (
    <div style={{
      width: '100%',
      maxWidth: 320,
      height: 360,
      margin: '0 auto',
      overflow: 'hidden',
      touchAction: 'none'
    }}>
      <Canvas
        // Positioned camera closer and centered directly on the 1:1 plane mesh
        camera={{ position: [0, 0, 1.4], fov: 45 }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[1, 2, 3]} intensity={1.0} />
        
        <Suspense fallback={<Html center style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Loading Avatar...</Html>}>
          <PureStaticAvatar />
        </Suspense>

        {/* Constrained controls allowing subtle interactive rotation angles */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 6}
          minAzimuthAngle={-Math.PI / 6}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}