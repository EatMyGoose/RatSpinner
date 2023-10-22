import React from "react"
import { IRotationAxes } from "./types"

interface IXYZSelectionBox
{
    initial: IRotationAxes,
    onAxesChange: (newValue: IRotationAxes) => void
}

const noOverflow: React.CSSProperties = {
    overflow: "auto", 
    whiteSpace: "nowrap"
};

export function XYZSelectionBox(props: IXYZSelectionBox)
{
    const [x, setX] = React.useState<boolean>(props.initial.x);
    const [y, setY] = React.useState<boolean>(props.initial.y);
    const [z, setZ] = React.useState<boolean>(props.initial.z);

    function OnCheckboxChanged(
        valueSetter: (callback:(val: boolean)=>boolean) => void)
    {
        valueSetter(checked => !checked);
    }

    const valChangeCallback = props.onAxesChange;
    React.useEffect(
        () => valChangeCallback({x,y,z})
        ,[x,y,z, valChangeCallback]
    );

    return (
        <fieldset>
            <label style={noOverflow}> 
                <input 
                    type="checkbox" 
                    checked={x}
                    onChange={(e)=>OnCheckboxChanged(setX)}
                />X
            </label>
            <label style={noOverflow}> 
                <input 
                    type="checkbox" 
                    checked={y}
                    onChange={(e)=>OnCheckboxChanged(setY)}
                />Y
            </label>
            <label style={noOverflow}> 
                <input 
                    type="checkbox"
                    checked={z}
                    onChange={(e)=>OnCheckboxChanged(setZ)}
                />Z
            </label>
        </fieldset>
    )
}

