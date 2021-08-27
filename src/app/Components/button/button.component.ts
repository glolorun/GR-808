import { Component, OnInit, Output } from '@angular/core';

export interface Button {
  id: number;
  value: string;
}

export interface Lighter {
  id: number;
  value: string;
}

export interface Position {
  id: number;
  value: string;
}
export const BUTTONS: Button[] = [
  { id: 1, value: ''},
  { id: 2, value: ''},
  { id: 3, value: ''},
  { id: 4, value: ''},
  { id: 5, value: ''},
  { id: 6, value: ''},
  { id: 7, value: ''},
  { id: 8, value: ''},
  { id: 9, value: ''},
  { id: 10, value: ''},
  { id: 11, value: ''},
  { id: 12, value: ''},
  { id: 13, value: ''},
  { id: 14, value: ''},
  { id: 15, value: ''},
  { id: 16, value: ''}
];

export const LIGHTERS: Lighter[] = [
  { id: 1, value: ''},
  { id: 2, value: ''},
  { id: 3, value: ''},
  { id: 4, value: ''},
  { id: 5, value: ''},
  { id: 6, value: ''},
  { id: 7, value: ''},
  { id: 8, value: ''},
  { id: 9, value: ''},
  { id: 10, value: ''},
  { id: 11, value: ''},
  { id: 12, value: ''},
  { id: 13, value: ''},
  { id: 14, value: ''},
  { id: 15, value: ''},
  { id: 16, value: ''}
]

export const POSITIONS: Position[] = [
  { id: 1, value: '1'},
  { id: 2, value: '2'},
  { id: 3, value: '3'},
  { id: 4, value: '4'},
  { id: 5, value: '5'},
  { id: 6, value: '6'},
  { id: 7, value: '7'},
  { id: 8, value: '8'},
  { id: 9, value: '9'},
  { id: 10, value: '10'},
  { id: 11, value: '11'},
  { id: 12, value: '12'},
  { id: 13, value: '13'},
  { id: 14, value: '14'},
  { id: 15, value: '15'},
  { id: 16, value: '16'}
]


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

}
