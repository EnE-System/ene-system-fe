import { configureStore } from "@reduxjs/toolkit";
import usersSlice  from "./features/usersData";

const store = configureStore({
    reducer: {
        // Define your reducers here
        users:usersSlice
    },
});

export default store;