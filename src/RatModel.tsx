import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, useFrame } from '@react-three/fiber'
import ratModel from "./assets/jpeg_rat.glb"

const deg2Radians: number = (Math.PI / 180.0);

export interface IRatModel
{
  xDegSec: number
  yDegSec: number
  zDegSec: number
  scale: number
  origin?: [number, number, number]
  offset?: [number, number, number]
}

const origin: [number, number, number] = [0, 0, 0];


export function RatModel(props: IRatModel)
{
  const gltf: any = useLoader(GLTFLoader, ratModel);

  const [xRot, setXRot] = React.useState<number>(0);
  const [yRot, setYRot] = React.useState<number>(0);
  const [zRot, setZRot] = React.useState<number>(0);

  const offset = props.offset || origin;

  const position = props.origin || [0,0,0];

  const scene = gltf.scene;
  const clonedRat = React.useMemo(
    () => scene.clone(), 
    [scene]
  )

  useFrame((state, delta, xrFrame) => {
    const coeff = delta * deg2Radians;
    setXRot(a => a + props.xDegSec * coeff)
    setYRot(a => a + props.yDegSec * coeff)
    setZRot(a => a + props.zDegSec * coeff)
  });

  return (
    <>
      <group
        rotation={[xRot, yRot, zRot]}
        scale={[props.scale,props.scale,props.scale]}
        position={position}
      >
        <primitive
          object={clonedRat}
          position={offset}
          children-0-castShadow
        />
      </group>
    </>
  );
}