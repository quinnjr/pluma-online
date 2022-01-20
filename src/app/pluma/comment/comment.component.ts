import { Component, ElementRef, Input, OnInit } from '@angular/core';
import MarkdownIt from 'markdown-it';
import MarkdownItEmoji from 'markdown-it-emoji';

@Component({
  selector: 'pluma-online-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() public comment: string = '';
  public isLoading = true;

  private content: HTMLDivElement;
  private md = new MarkdownIt({
    xhtml: true,
    typography: true,
    linkify: true
  }).use(MarkdownItEmoji);

  constructor(private readonly element: ElementRef) {
    this.content = this.element.nativeElement.querySelector('.content');
  }

  public ngOnInit() {
    this.isLoading = true;

    this.render(this.comment).then((content: string) => {
      this.content.innerHTML = content;
      this.isLoading = false;
    });
  }

  public ngOnChange() {
    this.isLoading = true;

    this.render(this.comment).then((content: string) => {
      this.content.innerHTML = content;
      this.isLoading = false;
    });
  }

  private async render(value: string): Promise<string> {
    return this.md.render(value);
  }
}
