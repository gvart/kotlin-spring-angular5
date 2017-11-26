import {Component, OnInit} from '@angular/core';
import {GreetService} from "../shared/greet.service";
import {Greet} from "../models/greet.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: Greet;

  constructor(
    private service: GreetService
  ) {}

  ngOnInit(): void {
    this.service.greet().subscribe(data => this.data = data);
  }



}
