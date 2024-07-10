import { usersData } from "../UserData";  
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name :"users",
    initialState:{value:usersData},
    reducers:{
       
    },
});

export default userSlice.reducer;