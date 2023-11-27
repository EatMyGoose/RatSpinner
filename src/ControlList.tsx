import { NumericSlider } from "./NumericSlider"
import { XYZSelectionBox } from "./XYZSelectionBox"
import { IRotationAxes } from "./types"

export interface IControlList
{
    scale: number,
    onScaleChanged: (newScale: number) => void,

    degPerSecond: number,
    onSpeedChanged: (newDegPerSecond: number) => void

    speedVariance: number
    onSpeedVarianceChanged: (newSpeedVariance: number) => void

    rows: number,
    onRowsChanged: (newValue:number) => void,

    cols: number,
    onColsChanged: (newValue:number) => void,

    rotOffset: number,
    onRotOffsetChanged: (newValue:number) => void,

    rotAxes: IRotationAxes,
    onRotAxesChanged: (newValue: IRotationAxes) => void

    className?: string
}

export function ControlList(props : IControlList)
{
    return (
        <>
            <li className={props.className}>
                <NumericSlider
                    title={"Scale"}
                    lower={0.5}
                    upper={10.0}
                    step={0.1}
                    value={props.scale}
                    onValueChange={props.onScaleChanged}
                />
            </li>
            <li className={props.className}>
                <NumericSlider
                    title={"Speed"}
                    lower={0.0}
                    upper={100.0}
                    step={1}
                    value={props.degPerSecond}
                    onValueChange={props.onSpeedChanged}
                />
            </li>
            <li className={props.className}>
                <NumericSlider
                    title={"Rotation Variance"}
                    lower={0.0}
                    upper={3.0}
                    step={0.1}
                    value={props.speedVariance}
                    onValueChange={props.onSpeedVarianceChanged}
                />
            </li>

            <li className={props.className}>
                <NumericSlider
                    title={"Rotation Offset"}
                    lower={0.0}
                    upper={5.0}
                    step={0.1}
                    value={props.rotOffset}
                    onValueChange={props.onRotOffsetChanged}
                />
            </li>

            <li className={props.className}>
                <NumericSlider
                    title={"Rows"}
                    lower={1.0}
                    upper={32.0}
                    step={1}
                    value={props.rows}
                    onValueChange={props.onRowsChanged}
                />
            </li>

            <li className={props.className}>
                <NumericSlider
                    title={"Cols"}
                    lower={1.0}
                    upper={32.0}
                    step={1}
                    value={props.cols}
                    onValueChange={props.onColsChanged}
                />
            </li>
            <li className={props.className}>
                <details>
                    <summary>Rotation Axes</summary>
                    <XYZSelectionBox
                        initial={props.rotAxes}
                        onAxesChange={props.onRotAxesChanged}
                    />
                </details>
            </li>
        </>
    )
}