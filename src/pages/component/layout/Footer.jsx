export default function Footer() {
    return(
        <footer class="footer">
            <div class="title">Formats pris en charge</div>
                <div class="filesTypes">
                    <div class="textFile">
                        <div class="icon"><FileTextIcon size={32} /></div>
                            <div class="FilesTaken">
                                <table>
                                    <tr>
                                        <td>PDF</td>
                                        <td>TXT</td>
                                        <td>DOCX</td>
                                    </tr>
                                    <tr>
                                        <td>ODT</td>
                                        <td>CSV</td>
                                        <td>RTX</td>
                                    </tr>
                                    <tr>
                                        <td>MD</td>
                                        <td>EPUB</td>
                                        <td>PAGES</td>
                                    </tr>
                                </table>
                            </div>
                    </div>
                    <div class="audioFile">
                        <div class="icon"><MusicNotesIcon size={32} /></div>
                            <div class="FilesTaken">
                                <table>
                                    <tr>
                                        <td>MP3</td>
                                        <td>FLAC</td>
                                        <td>ALAC</td>
                                    </tr>
                                    <tr>
                                        <td>AAC</td>
                                        <td>OGG</td>
                                        <td>WAV</td>
                                    </tr>
                                    <tr>
                                        <td>AIFF</td>
                                        <td>OPUS</td>
                                        <td>WMA</td>
                                    </tr>
                                </table>
                            </div>
                    </div>
                    <div class="videoFile">
                        <div class="icon"><FilmSlateIcon size={32} /></div>
                            <div class="FilesTaken">
                                <table>
                                    <tr>
                                        <td>MP4</td>
                                        <td>MKV</td>
                                        <td>WEBM</td>
                                    </tr>
                                    <tr>
                                        <td>MOV</td>
                                        <td>AVI</td>
                                        <td>WMV</td>
                                    </tr>
                                    <tr>
                                        <td>MPG</td>
                                        <td>3GP</td>
                                        <td>GIF</td>
                                    </tr>
                                </table>
                            </div>
                    </div>
                    <div class="imageFile">
                        <div class="icon"><ImageIcon size={32} /></div>
                            <div class="FilesTaken">
                                <table>
                                    <tr>
                                        <td>JPG</td>
                                        <td>PNG</td>
                                        <td>WEBP</td>
                                    </tr>
                                    <tr>
                                        <td>SVG</td>
                                        <td>PSD</td>
                                        <td>RAW</td>
                                    </tr>
                                    <tr>
                                        <td>TIFF</td>
                                        <td>HEIC</td>
                                        <td>AVIF</td>
                                    </tr>
                                </table>
                            </div>
                    </div>
                    <title>Convertleon 2026 / terms of Use / Privac Policy</title>
                </div>

        </footer>
    );
}