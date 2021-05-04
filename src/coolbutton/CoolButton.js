import React from "react"
import "bulma/css/bulma.css";

function CoolButton ( {children, isPrimary, isSuccess} ) {
    let myClasses = "button ";
    if(isPrimary) {
        myClasses += "is-danger is-rounded "
    }
    if(isSuccess) {
        myClasses += "is-success "
    }
    return (
        <div>
            <button className={myClasses}>{children}</button>
        </div>
    )
}

export default CoolButton;
