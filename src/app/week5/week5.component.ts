import { Component, OnInit } from '@angular/core';
import { Data } from '../shared/data';

@Component({
  selector: 'app-week5',
  templateUrl: './week5.component.html',
  styleUrls: ['./week5.component.css']
})

export class Week5Component implements OnInit {
  daftarData:Data[]=[];
  nim='';
  nama='';
  kelas='';
  jurusan='';
  data;

  constructor() { }

  ngOnInit() {
  }
  
  tambahData(){
  this.data = new Data(this.nim, this.nama, this.kelas, this.jurusan);
  this.daftarData.push(this.data);
  this.nim='';
  this.nama='';
  this.kelas='';
  this.jurusan='';
  }
}