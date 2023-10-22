import React from 'react';
import "@picocss/pico"
import "./App.css"
import { Canvas } from '@react-three/fiber'
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { RatGrid } from './RatGrid';
import { IRotationAxes } from './types';



function App() {
  const [scale, setScale] = React.useState<number>(2.0);
  const [degPerSecond, setDegPerSecond] = React.useState<number>(10);
  const [speedVariance, setSpeedVariance] = React.useState<number>(0);
  const [rotOffset, setRotOffset] = React.useState<number>(0);
  const [rotAxes, setRotAxes] = React.useState<IRotationAxes>({x: false, y:true, z:false});

  const [nRows, setNRows] = React.useState(8);
  const [nCols, setNCols] = React.useState(8);

  return (
    <>
      <AppHeader
        initialScale={scale}
        onScaleChanged={setScale}
        initialDegPerSecond={degPerSecond}
        onSpeedChanged={setDegPerSecond}
        initialSpeedVariance={speedVariance}
        onSpeedVarianceChanged={setSpeedVariance}
        initialCols={nCols}
        onColsChanged={setNCols}
        initialRows={nRows}
        onRowsChanged={setNRows}
        initialRotOffset={rotOffset}
        onRotOffsetChanged={setRotOffset}
        initialRotAxes={rotAxes}
        onRotAxesChanged={setRotAxes}
      />
      
      <article style={{padding:"24px"}}>
        
        <React.Suspense fallback={<div aria-busy/>}>
          <Canvas 
            className='viewport'
            camera={{ position: [0, 0, 2] }}>
            <ambientLight/>
            <RatGrid
              key={`${nRows},${nCols}`}
              rows={nRows}
              cols={nCols}
              xOffset={0.2 * scale}
              yOffset={0.2 * scale}
              rotOffset={rotOffset}
              degPerSecond={degPerSecond}
              scale={scale * 0.1}
              rotationVariance={speedVariance}
              scaleVariance={0}
              rotAxes={rotAxes}
            />
          </Canvas>  
        </React.Suspense>
      </article>
      
      <AppFooter/>
    </>
  );
}

export default App;


