import { BrowserMultiFormatReader } from '@zxing/library';

/**
 * zxing/libraryのラッパー
 * @class
 * @classdesc description
 */
export default class Reader {
  /** @constructs */
  constructor(stage) {
    this.stage = stage;
    this.codeReader = new BrowserMultiFormatReader();
    this.isLisning = false;
  }

  listen() {
    return new Promise(async (resolve, reject) => {
      if (this.isLisning) {
        reject('already listening');
        return;
      }

      this.isLisning = true;

      let result;
      try {
        // undefined で environment facing
        result = await this.codeReader.decodeFromInputVideoDevice(undefined, this.stage);
      } catch (e) {
        console.log(e);
      }

      resolve(result);

      this.isLisning = false;
    });
  }
}
