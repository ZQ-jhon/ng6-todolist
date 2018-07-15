import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  show:boolean;
  
  getChildEvent(event){
      if(!event){return}
      this.show = true;
    let hiding = new Promise((resolve)=>{
      setTimeout(() => {
        resolve();  
      }, 1500);
    });
    
    hiding.then(()=>{
      this.show = false;
    })
  }
  title = 'app';

  ngOnInit(){
    this.show = false;
  
  }
}
