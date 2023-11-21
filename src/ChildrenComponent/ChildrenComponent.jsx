import React from "react";

const ChildrenComponent = React.memo((props) => {
    console.log('Children rendering')
    return (
        <div>
            <input type="text" placeholder={props.DefaultText} onChange={props.onChange} />
        </div>
    )
})
export default ChildrenComponent;