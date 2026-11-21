import React, { Component} from 'react';
import Footer from "./component/layout/Footer.jsx"
import Header from "./component/layout/Header.jsx"
import aside from "./component/layout/Aside.jsx"
import SwitchSelector from "./component/common/switchSelector/SwitchSelector.jsx"
import DragAndDrop from "./component/common/dragAndDrop/DragAndDrop.jsx"

export function FileToConvert() {

    return (
    <div>
        <div>
            <h1>1. Selectionner le type de fichier</h1>
            <SwitchSelector/>
        </div>
        <div>
            <h2>2. glisser votre fichier ici</h2>
            <DragAndDrop />
        </div>
    </div>
    

    );
}