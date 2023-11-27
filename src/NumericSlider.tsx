import React from "react"

interface INumericSlider
{
    title: string,
    lower: number,
    upper: number,
    value: number,
    step: number
    onValueChange: (newValue: number) => void
}

export function NumericSlider(props: INumericSlider)
{
    function OnValueChange(e: React.ChangeEvent<HTMLInputElement>)
    {
        const newValue: number = Number(e.target.value);
        props.onValueChange(newValue);
    }

    return (
        <label>
            {props.title}
            <input 
                type="range" 
                value={props.value}
                max={props.upper}
                min={props.lower}
                step={props.step}
                onChange={OnValueChange}
            />
        </label>
    )
}