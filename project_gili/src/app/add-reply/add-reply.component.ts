import { Component } from '@angular/core';
export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-add-reply',
  templateUrl: './add-reply.component.html',
  styleUrls: ['./add-reply.component.scss']
})
export class AddReplyComponent {

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  
    editor: EditorType = 'name';
  
    get showNameEditor() {
      return this.editor === 'name';
    }
  
    get showProfileEditor() {
      return this.editor === 'profile';
    }
  
    toggleEditor(type: EditorType) {
      this.editor = type;
    }
}
