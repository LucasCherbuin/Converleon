import React from "react";
import ReactSwitchSelector from "react-switch-selector"; // library component
import { FileTextIcon, MusicNotesIcon, FilmSlateIcon, ImageIcon } from '@phosphor-icons/react';

// Note: we renamed the wrapper to FileTypeSwitch to avoid shadowing ReactSwitchSelector
export default function SwitchSelector() {
  // Keep original options content but memoize so it's not recreated every render
  const options = React.useMemo(() => ([
    {
      label: <span><FileTextIcon size={32} />Text</span>,
      value: {
        DocumentFileSupported: ["PDF", "TXT", "DOCX", "ODT", "CSV", "RTX", "MD", "EPUB", "PAGES"]
      },
      selectedBackgroundColor: "#0097e6",
    },
    {
      label: "Document",
      value: "documentFile",
      selectedBackgroundColor: "#fbc531"
    },
    {
      label: <span><MusicNotesIcon size={32} />Audio</span>,
      value: {
        AudioFileSupported : ["MP3", "FLAC", "ALAC", "AAC", "OGG", "WAV", "AIFF", "OPUS", "WMA"]
      },
      selectedBackgroundColor: "#0097e6",
    },
    {
      label: "Audio",
      value: "audioFile",
      selectedBackgroundColor: "#fbc531"
    },
    {
      label: <span><FilmSlateIcon size={32} />Video</span>,
      value: {
        FilmFileSupported: ["MP4", "MKV", "WEBM", "MOV", "AVI", "WMV", "MPG", "3GP", "GIF"]
      },
      selectedBackgroundColor: "#0097e6",
    },
    {
      label: "Video",
      value: "videoFile",
      selectedBackgroundColor: "#fbc531"
    },
    {
      label: <span><ImageIcon size={32} />Image</span>,
      value: {
        ImageFileSupported: ["JPG", "PNG", "WEBP", "SVG", "PSD", "RAW", "TIFF", "HEIC", "AVIf"]
      },
      selectedBackgroundColor: "#0097e6",
    },
    {
      label: "Image",
      value: "imageFile",
      selectedBackgroundColor: "#fbc531"
    },
  ]), []); // no deps: options are static

  // Memoize the change handler as well
  const onChange = React.useCallback((newValue) => {
    console.log(newValue);
  }, []);

  return (
    <div className="your-required-wrapper" style={{ width: 100, height: 30 }}>
      <ReactSwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={0}
        backgroundColor={"#353b48"}
        fontColor={"#f5f6fa"}
      />
    </div>
  );
}