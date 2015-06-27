/*globals io, Visibility, _ */
'use strict';
angular.module('FileSync', ['ngAnimate', 'hljs', 'pascalprecht.translate', 'ngFlag']);

angular.module('FileSync')
  .constant('io', io)
  .constant('Visibility', Visibility)
  .constant('_', _);
