import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item : TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter(); 
  @Output() update: EventEmitter<any> = new EventEmitter();
  private function ='default';
  private editable : boolean = false;


removeItem()
{
  this.remove.emit(this.item);
}

  constructor() { }

  ngOnInit() {
  }
  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
    
  }
  editItem()
  {
    this.editable=true;
  }
  editType()
  {

  }


  
  
  
  

}