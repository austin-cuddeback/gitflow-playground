import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent{
  @Input() sectionName: string = '';
  @Input() sectionParagraph: string = '';
  @Input() list: string[] = [];
}
