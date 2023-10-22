import React from "react"
import { NumericSlider } from "./NumericSlider";
import { IRotationAxes } from "./types";
import { XYZSelectionBox } from "./XYZSelectionBox";


interface IAppHeader
{
    initialScale: number,
    onScaleChanged: (newScale: number) => void,

    initialDegPerSecond: number,
    onSpeedChanged: (newDegPerSecond: number) => void

    initialSpeedVariance: number
    onSpeedVarianceChanged: (newSpeedVariance: number) => void

    initialRows: number,
    onRowsChanged: (newValue:number) => void,

    initialCols: number,
    onColsChanged: (newValue:number) => void,

    initialRotOffset: number,
    onRotOffsetChanged: (newValue:number) => void,

    initialRotAxes: IRotationAxes,
    onRotAxesChanged: (newValue: IRotationAxes) => void
}

export function AppHeader(props : IAppHeader)
{
    return (
        <header>
        <div className="container">
            <nav>
            <ul>
                <li>
                    <h1>Rat Spinner</h1>
                </li>
            </ul>
            <ul>
                <li>
                    <NumericSlider
                        title={"Scale"}
                        lower={0.5}
                        upper={10.0}
                        step={0.1}
                        initial={props.initialScale}
                        onValueChange={props.onScaleChanged}
                    />
                </li>
                <li>
                    <NumericSlider
                        title={"Speed"}
                        lower={0.0}
                        upper={100.0}
                        step={1}
                        initial={props.initialDegPerSecond}
                        onValueChange={props.onSpeedChanged}
                    />
                </li>
                <li>
                    <NumericSlider
                        title={"Rotation Variance"}
                        lower={0.0}
                        upper={3.0}
                        step={0.1}
                        initial={props.initialSpeedVariance}
                        onValueChange={props.onSpeedVarianceChanged}
                    />
                </li>

                <li>
                    <NumericSlider
                        title={"Rotation Offset"}
                        lower={0.0}
                        upper={5.0}
                        step={0.1}
                        initial={props.initialRotOffset}
                        onValueChange={props.onRotOffsetChanged}
                    />
                </li>

                <li>
                    <NumericSlider
                        title={"Rows"}
                        lower={1.0}
                        upper={32.0}
                        step={1}
                        initial={props.initialRows}
                        onValueChange={props.onRowsChanged}
                    />
                </li>

                <li>
                    <NumericSlider
                        title={"Cols"}
                        lower={1.0}
                        upper={32.0}
                        step={1}
                        initial={props.initialCols}
                        onValueChange={props.onColsChanged}
                    />
                </li>
                <li>
                    <details>
                        <summary>Rotation Axes</summary>
                        <XYZSelectionBox
                            initial={props.initialRotAxes}
                            onAxesChange={props.onRotAxesChanged}
                        />
                    </details>
                </li>
            </ul>
            </nav>
        </div>
        </header>
    );
}