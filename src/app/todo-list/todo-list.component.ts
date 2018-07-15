import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import {StorageService} from '../service/storage.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public list:Array<string|number|object> = new Array(0);
  constructor(
   private  storage:StorageService
  ) {
   }
 @Output() isShow = new EventEmitter();


/**
 *
 *
 * @param {*} Event：键盘回车 以及 鼠标点下添加
 * @param {*} Value:input 表框的值
 * @memberof TodoListComponent
 */
add (event,value){
  // console.log(event);
  
    event.target.value = '';

    // 判断是否为空
    if(value && value.length>=1){
      this.list.push(value);
      this.storage.set("items",this.list);
    }
    else{
      this.isShow.emit(true);
    }
  }

/**
 *
 *
 * @param {*} event:点击删除传递的$event对象
 * @memberof TodoListComponent
 */
remove(event,index){
  this.list.splice(index,1);
  this.storage.set("items",this.list);

}

/**
 *
 *
 * @returns  如果读取不到 localStorage , 直接return
 * @memberof TodoListComponent
 */
ngOnInit() {
    if(!this.storage.get('items')){
      return;
    }
   
   this.list =  Array.from(this.storage.get('items').split(','));
  }

}
