/*
 * Import the needed controllers/services/directives for this (angular) module
 */
import IOController = require('io/controllers/IOController');
import IOService = require('io/services/IOService');

var io = angular.module('app.io', []);

io.controller('ioController', IOController);
io.service('ioService', IOService);

//export the angular module as the actual amd module
export = io;
