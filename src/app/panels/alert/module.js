/** @scratch /panels/5
 * include::panels/text.asciidoc[]
 */

/** @scratch /panels/text/0
 * == text
 * Status: *Stable*
 *
 * The text panel is used for displaying static text formated as markdown, sanitized html or as plain
 * text.
 *
 */
define([
  'angular',
  'app',
  'lodash',
  'require'
],
function (angular, app, _, require) {
  'use strict';

  var module = angular.module('kibana.panels.alert', []);
  app.useModule(module);

  module.controller('alert', function($scope) {
    $scope.panelMeta = {
      status  : "Alpha",
      description : "A panel to configure alerts"
    };

    // Set and populate defaults
    var _d = {
      /** @scratch /panels/text/5
       * === Parameters
       *
       * mode:: `html', `markdown' or `text'
       */
	    modes     : [ "pagerduty","email", "hipchat" ],
	    alarms    : [],
	    new_alarm : { "mode":"email", "enabled": true },
      /** @scratch /panels/text/5
       * content:: The content of your panel, written in the mark up specified in +mode+
       */
      content : "",
      style: {},
    };
    _.defaults($scope.panel,_d);

    $scope.init = function() {
      $scope.ready = true;
    };
    $scope.add_alert = function() {
      $scope.panel.new_alarm.status = { "label": "info", "msg": "check pending" };
      $scope.panel.alarms.push($scope.panel.new_alarm);
      $scope.panel.new_alarm =  { "mode":"email", "enabled": true };
      $scope.panel.changed=true
    };
    $scope.delete_alert = function(alarm) {
	var index=$scope.panel.alarms.indexOf(alarm);
	$scope.panel.alarms.splice(index,1);
    };

  });

});
