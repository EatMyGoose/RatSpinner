import React from "react"

interface INumericSlider
{
    title: string,
    lower: number,
    upper: number,
    initial: number,
    step: number
    onValueChange: (newValue: number) => void
}

export function NumericSlider(props: INumericSlider)
{
    const [value, setValue] = React.useState<number>(props.initial);

    function OnValueChange(e: React.ChangeEvent<HTMLInputElement>)
    {
        const newValue: number = Number(e.target.value);
        setValue(newValue)
        props.onValueChange(newValue);
    }

    return (
        <label>
            {props.title}
            <input 
                type="range" 
                value={value}
                max={props.upper}
                min={props.lower}
                step={props.step}
                onChange={OnValueChange}
            />
        </label>
    )
}