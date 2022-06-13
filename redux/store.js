import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./adminRedux";

export default configureStore({
  reducer: {
    admin: adminReducer,
  },
});
