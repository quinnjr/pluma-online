import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { unescape } from 'he';

@Component({
  selector: 'pluma-online-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() public comment: string = '';
  public isLoading = true;

  private content: HTMLDivElement;

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

  private async render(content: string): Promise<string> {
    return unescape(content);
  }
}
