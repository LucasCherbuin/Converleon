import React, { useState } from 'react';
import SwitchSelector from "react-switch-selector";

// affiche le fichier uploader
export default function FileUploaded() {
    function FileUploaded(result) {
        this.fileType = result;
    }

    FileUploaded.prototype.toString = function() {
        return this.fileType;
    }
}