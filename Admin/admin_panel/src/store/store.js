import { createStore } from "redux";
import rootReducer from "../reducers/indexReducer";
import retailerReducer from "../reducers/retailersReducer";
import { composeWithDevTools } from "redux-devtools-extension";



export default createStore(retailerReducer, composeWithDevTools());
