import { Component } from '@angular/core';
import {AppService, Foo} from './app.service'

@Component({
  selector: 'resource2-details',
  providers: [AppService],
  template: `<div class="container">
    <h1 class="col-sm-12">Foo Details</h1>
    <div class="col-sm-12">
        <label class="col-sm-3">ID</label> <span>{{bar.id}}</span>
    </div>
    <div class="col-sm-12">
        <label class="col-sm-3">INFO:</label> <span>{{bar.info}}</span>
    </div>
    <div class="col-sm-12">
        <button class="btn btn-primary" (click)="getFoo()" type="submit">New Foo</button>
    </div>
</div>`
})

export class Resource2Component {
    private getUrl = 'http://localhost:9002/resource2/get/';
    public bar = new Foo(1,'sample bar');

    constructor(private _service:AppService) {}

    getFoo(){
        this._service.getResource(this.getUrl)
         .subscribe(
                     data => this.bar = data,
                     error =>  this.bar.info = 'Error');
    }
}
