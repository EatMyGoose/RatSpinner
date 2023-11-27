import React from 'react';
import "@picocss/pico"
import "./App.css"
import { Canvas } from '@react-three/fiber'
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { RatGrid } from './RatGrid';
import { IRotationAxes } from './types';
import { SideBar } from './Sidebar';
import { IControlList } from './ControlList';



function App() {
  const [scale, setScale] = React.useState<number>(2.0);
  const [degPerSecond, setDegPerSecond] = React.useState<number>(10);
  const [speedVariance, setSpeedVariance] = React.useState<number>(0);
  const [rotOffset, setRotOffset] = React.useState<number>(0);
  const [rotAxes, setRotAxes] = React.useState<IRotationAxes>({x: false, y:true, z:false});

  const [nRows, setNRows] = React.useState(8);
  const [nCols, setNCols] = React.useState(8);

  const [showSideBar, setShowSidebar] = React.useState<boolean>(true);

  const controls: IControlList = {
      scale,
      onScaleChanged:setScale,
      degPerSecond,
      onSpeedChanged:setDegPerSecond,
      speedVariance,
      onSpeedVarianceChanged:setSpeedVariance,
      cols:nCols,
      onColsChanged:setNCols,
      rows:nRows,
      onRowsChanged:setNRows,
      rotOffset,
      onRotOffsetChanged:setRotOffset,
      rotAxes,
      onRotAxesChanged:setRotAxes
  };

  return (
    <>
    <SideBar 
      show={showSideBar}
      onClose={() => setShowSidebar(false)}
      {...controls}
    />
    <div className='flex-container'>
      <AppHeader
        {...controls}
        setShowSidebar={() => setShowSidebar(true)}
      />
      
      <article style={{padding:"24px", flex:1}}>
        
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
    </div>
    </>
  );
}

export default App;


