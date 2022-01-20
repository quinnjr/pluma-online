export class Helpers {
  public static async compressMarkdown(content: string): Promise<string> {
    return content.replace(/[\n\r]+/g, '\n').replace(/\t+/g, '\t');
  }
}
