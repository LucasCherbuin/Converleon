import fs from 'fs'
import path from 'path-browserify'

export default class FileResult {
  constructor(api, fileInfo) {
    this.api = api;
    this.fileInfo = fileInfo;
  }

  get fileName() {
    return this.fileInfo.FileName;
  }

  async save(filePath) {
    const { promises: fsp } = fs;
    let downloadPath;

    // If filePath is an existing directory, write into it; otherwise treat as file path.
    try {
      const stats = await fsp.stat(filePath);
      if (stats.isDirectory()) {
        downloadPath = path.join(filePath, this.fileName);
      } else {
        downloadPath = filePath;
      }
    } catch (err) {
      // stat throws if path does not exist -> treat filePath as target file path
      downloadPath = filePath;
    }

    // Ensure parent directory exists for downloadPath (mkdir is idempotent with recursive: true)
    await fsp.mkdir(path.dirname(downloadPath), { recursive: true });

    // Assume api.client.download returns a promise; await it so callers can catch errors
    return this.api.client.download(this.url, downloadPath);
  }
}