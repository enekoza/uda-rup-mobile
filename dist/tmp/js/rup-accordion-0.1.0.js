/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.12.0 - 2014-11-16
 * License: MIT
 */
angular.module('ui.rup.accordion', ["ui.bootstrap.accordion"])

.directive('rupAccordion', function (accordionDirective) {
  return angular.extend({}, accordionDirective[0],{});
})

.directive('rupAccordionGroup', function (accordionGroupDirective) {
  return angular.extend({}, accordionGroupDirective[0],{});
})

.directive('rupAccordionHeading', function (accordionHeadingDirective) {
  return angular.extend({}, accordionHeadingDirective[0],{});
});




