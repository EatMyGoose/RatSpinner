import { ControlList, IControlList } from "./ControlList";
import "./SideBar.css"

export interface ISideBar extends IControlList
{
    show: boolean;
    onClose: () => void;
}

export function SideBar(props: ISideBar)
{
    const additionalClasses = props.show? "show" : "";
    return (
        <>  
            <div
                className={"backdrop vstack-container " + additionalClasses}
                onClick={props.onClose}
            />
            <article className={"sidebar vstack-container " + additionalClasses}>
                <nav>
                    <ul>
                        <li>
                            <h3>Options</h3>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <button 
                                className="outline secondary"
                                onClick={props.onClose}
                            >
                                Close
                            </button>
                        </li>
                    </ul>
                </nav>
                <aside className="visible-island">
                    <nav>
                        <ControlList 
                            {...props}
                        />
                    </nav>
                </aside>
            </article>
        </>
    )
}