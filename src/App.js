import React, { Fragment } from "react";
import Products from "./components/Products/Products";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {

    return <Fragment>
        <SearchBar />
        <Products />
    </Fragment>;
}
export default App;