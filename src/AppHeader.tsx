import { ControlList, IControlList } from "./ControlList";

import "./AppHeader.css"

interface IAppHeader extends IControlList
{
    setShowSidebar: () => void;
}

export function AppHeader(props : IAppHeader)
{
    return (
        <header>
        <div className="container">
            <nav>
            <ul>
                <li>
                    <h1 className="inline-block">Rat Spinner</h1>
                </li>
            </ul>

            <ul>
                <li className="show-xs">
                    <button 
                        className="secondary outline"
                        onClick={props.setShowSidebar}
                    >
                        Menu
                    </button>
                </li>
                <ControlList 
                    className="hide-xs"
                    {...props}
                />
            </ul>
            </nav>
        </div>
        </header>
    );
}