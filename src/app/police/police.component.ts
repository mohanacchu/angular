import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.css']
})
export class PoliceComponent implements OnInit {
@Input() public cumming:string;

  constructor() { }

  ngOnInit() {}

}
