import React from "react";

import UserHoc from "../components/hoc/userHoc";

const User = (props) => {
    return (
        <div>
            User
        </div>
    )
}

const User2 = (props) => {
    return (
        <div>
            User 2
        </div>
    )
}

export default UserHoc(User, User2, "Hello I am");