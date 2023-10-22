import {AppContext} from "../hooksAndContext/AppContextAndProvider";
import React, {useState} from "react";
import defaultTheme from "../layout/defaultTheme";
import {ThemeProvider} from "@mui/material";
import Home from "../components/Home";
import {useSearchParams} from "react-router-dom";


const App = () => {
    const [products, setProducts] = useState<Array<any>>([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState<Boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <ThemeProvider theme={defaultTheme}>
        <AppContext.Provider
            value={{
                products,
                setProducts,
                isLoadingProducts,
                setIsLoadingProducts,
                searchParams,
                setSearchParams,

            }}>
            <Home />
        </AppContext.Provider>
        </ThemeProvider>

    )
}
export default App;