import React from "react";
import UserContext from "./UserContext";

// here pass a parameter name children and at the context we provide that data that can be access from anywhere.
// use useState and we also have create a element of type UserContextProvider and we also specify that what value we are giving to the children.
// so insted of pass value we pass object by using {} and in this we pass a object that contains user,setuser.
const UserContextProvider = ({children})=>{
    const [user,setUser] = React.useState(null) // by using this syntax we need not to import this.
    return(
        // that is access every where and here we provide data of type user and setUser to access.
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider