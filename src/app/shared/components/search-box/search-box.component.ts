import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder:string ='';

@Output()
public emitTerm:EventEmitter<string>=new EventEmitter();


onEnter(event:any){
  this.emitTerm.emit(event.target.value);
}



}
