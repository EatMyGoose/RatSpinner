import React from 'react';
import { RatModel } from './RatModel';
import { IRotationAxes, TVec3 } from './types';
import { cacheRandomNumber, cacheRandomV3 } from './cachedRandomValues';

interface IRatGrid
{
    rows: number, 
    cols: number,
    xOffset: number,
    yOffset: number,

    degPerSecond: number,
    scale: number,

    rotOffset?: number,         //spin pivot offset
    rotationVariance?: number,  //0 onwards
    scaleVariance?: number      //0 onwards
    rotAxes?: IRotationAxes //which axes have rotation enabled
}

function GetGridCentres(
    xOffset: number, yOffset: number,
    rows: number, cols: number) : TVec3[]
{
    let offsets: TVec3[] = [];

    const halfWidth: number = xOffset * (cols - 1) * 0.5;
    const halfHeight: number = yOffset * (rows - 1) * 0.5;

    for(let r = 0; r < rows; r++)
    {
        for(let c = 0; c < cols; c++)
        {
            const xPosition = c * xOffset - halfWidth;
            const yPosition = r * yOffset - halfHeight;
            const position: TVec3 = [xPosition, yPosition, 0];
            offsets.push(position);
        }
    }

    return offsets;
}

const defaultAxes: IRotationAxes = {
    x: false,
    y: true,
    z: false,
}

export function RatGrid(props: IRatGrid)
{
    const rotationVariance: number = props.rotationVariance || 0;
    const scaleVariance: number = props.scaleVariance || 0;
    const rotOffset: number = props.rotOffset || 0;

    const rotAxes = props.rotAxes || defaultAxes;

    const offsets = GetGridCentres(
        props.xOffset,
        props.yOffset,
        props.rows,
        props.cols
    );

    return (
        <>
            {
                offsets.map((position, idx) => {
                    const rotCoeff: number = 1 + cacheRandomNumber(0, rotationVariance, idx);
                    const scaleCoeff: number = 1 + cacheRandomNumber(0, scaleVariance, idx);

                    const rotOffsetVec: TVec3 = cacheRandomV3(-rotOffset, rotOffset, idx);
                    return (
                        <RatModel
                            key={idx}
                            origin={position}
                            xDegSec={props.degPerSecond * rotCoeff * (rotAxes.x? 1 : 0)}
                            yDegSec={props.degPerSecond * rotCoeff * (rotAxes.y? 1 : 0)}
                            zDegSec={props.degPerSecond * rotCoeff * (rotAxes.z? 1 : 0)}
                            scale={props.scale * scaleCoeff}
                            offset={rotOffsetVec}
                        />
                    )
                })
            }
        </>
    )
}