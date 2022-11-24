import React from "react"

export default function Num(props) {

    const styles={
        backgroundColor: props.isHold ? "#59E391" : "white"
    }
    return (
        <div 
        className="box"  
        style={styles}
        onClick={props.holds}>
            <h2 className="number">
            {props.value}
            </h2>
        </div>
    )
}