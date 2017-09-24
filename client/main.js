import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

const MIN_LENGTH = 5;

Template.body.viewmodel({
  showVMVersion: false
});

Template.blazeTest.viewmodel({
  name: ViewModel.property.string.min(MIN_LENGTH),
  
  isValidating() {
    this.name.depend();
    return this.name.validating();
  },

  nameIsValid() {
    this.name.depend();
    return this.name.valid();
  }
});


Template.vmTest.viewmodel({
  name: ViewModel.property.string.min(MIN_LENGTH)
});