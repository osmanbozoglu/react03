import React from "react";

const UserHoc = (WrappedComponent, WrappedComponent2, arg1) => {

    console.log(arg1);
    return (props) => (
        <>
            {console.log(props)}
            <WrappedComponent {...props} />
            <WrappedComponent2 />
        </>
    )
}

export default UserHoc;