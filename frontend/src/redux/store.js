import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./auth.slice";

export default configureStore(
    {reducer :
        {AuthReducer}
    }


)