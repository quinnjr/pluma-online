import { Injectable } from '@nestjs/common';
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';

@Injectable()
export class MarkdownService {
  private markdown;

  constructor() {
    this.markdown = new MarkdownIt({
      html: true,
      xhtmlOut: true
    });
  }

  public async parse(input: string): Promise<string> {
    const output = this.markdown.render(input);
    return DOMPurify.sanitize(output);
  }
}
