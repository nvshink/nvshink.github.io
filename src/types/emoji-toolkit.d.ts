declare module "emoji-toolkit" {
  interface JoyPixels {
    emojiVersion: string;
    emojiSize: string;
    imagePathPNG: string;
    imageType: "png" | "svg";
    fileExtension: string;
    toImage(str: string): string;
    toShort(str: string): string;
    shortnameToImage(str: string): string;
    shortnameToUnicode(str: string): string;
    unicodeReplace(str: string): string;
  }

  const joypixels: JoyPixels;
  export default joypixels;
}
