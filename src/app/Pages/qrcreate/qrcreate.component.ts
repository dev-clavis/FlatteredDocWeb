import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fdw-qrcreate',
  templateUrl: './qrcreate.component.html',
  styleUrls: ['./qrcreate.component.css']
})
export class QrcreateComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
    });
  }

}
