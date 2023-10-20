import {AppContext} from "../hooks/AppContextAndProvider";
import React, {useState} from "react";
import defaultTheme from "../layout/defaultTheme";
import {ThemeProvider} from "@mui/material";
import Home from "../components/Home";

const App = () => {
    const [products, setProducts] = useState([]);
    const [queryParams, setQueryParams] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    return (
        <ThemeProvider theme={defaultTheme}>
        <AppContext.Provider
            value={{
                products,
                setProducts,
                isLoadingProducts,
                setIsLoadingProducts,
                queryParams,
                setQueryParams
            }}>
            <Home />
        </AppContext.Provider>
        </ThemeProvider>

    )
}
export default App;