// importing observables and decorate
import { decorate, observable, action } from "mobx";

class Store {
  // observable to save search query
  selectedValue = -1;

  // action to update text
  updateValue(value) { 
    this.selectedValue = value
    console.log("mobx selectedValue", this.selectedValue);
  }
}

// another way to decorate variables with observable
decorate(Store, {
  selectedValue: observable,
  updateValue: action,
});

// export class
export default new Store();