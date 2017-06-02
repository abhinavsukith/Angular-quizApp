angular.module('qApp').factory('myService', function() {
 var savedData = {};
 var sname = '';
 function set(data) {
   sname = data;
   alert(sname);
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

});