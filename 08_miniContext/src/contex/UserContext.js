import React from "react";

// context is like a global variable anyone can be access.
// for use this we need a provider.i.e
/* <UserContext>
    <LOGIN/>
    <NAME/>
    <EMAIL/>
<UserContext/> */
// WE have to  gives a provider to store the data in the userContext that can be access that data from anywhere.


const UserContext = React.createContext()

export default UserContext;