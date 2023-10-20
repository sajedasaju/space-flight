import {AppContext} from "../hooks/AppContextAndProvider";
import React, {useState} from "react";
import Home from "../components/Home";
import defaultTheme from "../layout/defaultTheme";
import {ThemeProvider} from "@mui/material";

const App = () => {
    const [products, setProducts] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);

    return (
        <ThemeProvider theme={defaultTheme}>
        <AppContext.Provider
            value={{
                products,
                setProducts,
                isLoadingProducts,
                setIsLoadingProducts
            }}>
            <Home />
        </AppContext.Provider>
        </ThemeProvider>

    )
}
export default App;