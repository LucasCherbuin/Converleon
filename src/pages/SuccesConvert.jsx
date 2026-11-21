import React, { Component} from 'react';
import Footer from "./component/layout/Footer.jsx"
import Header from "./component/layout/Header.jsx"
import aside from "./component/layout/Aside.jsx"
import FileResult from './component/common/fileResult/FileResult.jsx';
import BackgroundResult from "../pages/component/common/backgroundResult/BackgroundResult.jsx"

export function SuccesConvert() {

    return (
        <div>
            <backgroundResult>
                <buttonConvert />
            </backgroundResult>
        </div>
    )
}