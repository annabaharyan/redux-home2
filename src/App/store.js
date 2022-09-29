import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { initialProducts } from "../Fetcher/Product/initialProduct";
import { ProductSlice } from "../Fetcher/Product/ProductSlice";
import { initialStatuses } from "../Fetcher/Statuses/initialStatus";
import { StatusSlice } from "../Fetcher/Statuses/StatusSlice";
export const store = createStore(combineReducers({
    products: ProductSlice,
    statuses: StatusSlice
}),
    {
        products: initialProducts,
        statuses: initialStatuses
    },
    applyMiddleware(thunk)
)








