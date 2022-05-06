import { Component, OnInit } from '@angular/core';
import { CdkDragDrop,moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  ownedAnimals=[
    "dog",
    "cat",
    "fish",
    "lion",
    "tiger"
  ]
  animalsWishList=[
    "turtle",
    "kuala"
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onDrop(event:CdkDragDrop<string []>){
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
    else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
    console.log(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
}
