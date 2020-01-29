import React from "react";

/*
    Higher Order Form Component to bind required component at run time
*/

function ComponentWrapper(DynamicComponent) {
    return class Form extends React.Component{
        render() {
            return <DynamicComponent {...this.props}/>;
        }
    };
}

export  default ComponentWrapper;