import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrl: './propertybinding.component.css'
})
export class PropertybindingComponent {

  action=false;
  // title="Hello Title";

  title="This is property binding";

  imagePath="https://picsum.photos/200/300";

  color="red";
}
