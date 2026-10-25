import react from "react";
import { browserRouter } from "react-router-dom"
import AppRoutes from "../routes/AppRoutes";

const App = () => {
    return (
        <react>
            <browserRouter>
                <AppRoutes />
            </browserRouter>
        </react>
    );
}

export default App;