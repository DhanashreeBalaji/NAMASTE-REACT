// Context is a central store to keep the data, so that we dont need to drill down the props
// we can access the data inside context anywhere, inside any components

// Consider this context is used to store information about logged in user
// createContext is a utility function to create context
//Next we will access this information which is global in other components

import { createContext} from "react";

const UserContext = createContext ({
     loggedInUser : "Hari" ,
     Country : "Canada" ,
     City : "British Columbia" ,
});

export default UserContext;