import "../Styles/dash.css"
import Analytics from "./Analytics";
import Sidebar from "./Sidebar";

let DashBoard = (props)=>{


    return (
        <div className="dash">
            <Sidebar></Sidebar>
            <Analytics setState = {props.setState} state ={props.state} ></Analytics>
        </div>
    )
}

export default DashBoard;