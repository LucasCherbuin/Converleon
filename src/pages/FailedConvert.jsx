import React, { Component} from 'react';
import Footer from './component/layout/Footer.jsx';
import Header from "./component/layout/Header.jsx";
import Aside from './component/layout/Aside.jsx';
import ButtonConvert from "../pages/component/common/buttons/ButtonConvert.jsx"
import NewConvertButton from "../pages/component/common/buttons/ButtonNewConvert.jsx"


export function FailedConvert({ ConvertButton}) {
    return (
        <div>
            <SmileySadIcon size={32} />
            <p>une erreur est survenue</p>
            <ConvertButton />
            <NewConvertButton />    
        </div>
    );
}