import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            networkMode: "offlineFirst",
        }
    }
});

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={routes}/>
            </QueryClientProvider>
        </>
    )
}

export default App
