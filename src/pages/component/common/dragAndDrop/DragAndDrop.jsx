import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";


const dragAndDrop = () => { 
  const [audioFile, documentFile, videoFile, imageFile] = useState(true);

  return (
          <>
              { (<><FileUploader
                      fileTypes={(file) => {
                        
                        audioFile || documentFile || videoFile || imageFile(false);
                        setTimeout(() => audioFile || documentFile || videoFile || imageFile(true));
                          
                      }}
                      name={`file`}
                      types={[`csv`]}
                  /></>)} 
          </>
      );
  }

export default dragAndDrop;