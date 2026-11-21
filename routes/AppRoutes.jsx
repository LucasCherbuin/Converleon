import react, {lazy} from "react";
import { Routes, Route} from "react-router-dom";

const FailedConvert = lazy(() => import("../pages/FailedConvert"));
const FileToConvert = lazy(() => import("../pages/FileToConvert"));
const SelectionAndUpload = lazy(() => import("../pages/SelectionAndUpload"));
const SuccesConvert = lazy(() => import("../pages/SuccesConvert"));

function AppRoutes() {
        return (
            <Routes>
                <Route path="/" element={<SelectionAndUpload/>} />
                <Route path="/FileToConvert" element={<FileToConvert/>} />
                <Route path="/SuccesConvert" element={<SuccesConvert/>} />
                <Route path="/FailedConvert" element={<FailedConvert/>} />
            </Routes>
    );
}

export default AppRoutes;