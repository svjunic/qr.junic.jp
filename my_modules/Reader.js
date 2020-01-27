import { BrowserMultiFormatReader } from '@zxing/library';

/**
 * zxing/libraryのラッパー
 * @class
 * @classdesc description
 */
export default class Reader {
  /** @constructs */
  constructor({ stageId, videoId }) {
    this.stageId = stageId;
    this.videoId = videoId;
    this.$stage = document.querySelector(`#${stageId}`);
    this.codeReader = new BrowserMultiFormatReader();
    this.isLisning = false;
  }

  listen() {
    const video = document.createElement('video');
    video.id = this.videoId;
    this.$stage.prepend(video);

    return new Promise(async (resolve, reject) => {
      if (this.isLisning) {
        reject('already listening');
        return;
      }

      this.isLisning = true;

      let result;
      try {
        // undefined で environment facing
        result = await this.codeReader.decodeFromInputVideoDevice(undefined, this.videoId);
      } catch (e) {
        console.log(e);
      }

      this.codeReader.stopStreams();

      this.$stage.removeChild(video);

      if (this.isLisning) {
        resolve(result);
        this.isLisning = false;
      } else {
        reject('処理が中断されました');
      }
    });
  }

  unlisten() {
    console.log('unlisten');
    console.log(this.codeReader);
    this.isLisning = false;
    window.codeReader = this.codeReader;
    this.codeReader.stopStreams();
  }
}
