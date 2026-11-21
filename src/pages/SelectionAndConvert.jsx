import React, { Component} from 'react';
import Footer from "./component/layout/Footer.jsx"
import Header from "./component/layout/Header.jsx"
import Aside from "./component/layout/Aside.jsx"
import ButtonConvert from "../pages/component/common/buttons/ButtonConvert.jsx"
import FileUploaded from "./component/common/file/FileUploaded.jsx"
import FileChoosing from './component/common/file/FileChoosing.jsx';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/csr/ArrowRight';

export function SelectionAndConvert() {

    return (
        <div>
            <h1>3. Selectionner le format voulu</h1>
            <FileUploaded />
            <ArrowRightIcon size={32} />
            <FileChoosing />
            <ButtonConvert />
        </div>
    )
}