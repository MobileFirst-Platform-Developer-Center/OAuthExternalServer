/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var PATH_PUBLIC = "/public";
var PATH_PROTECTED = "/protected";

var EXTERNAL_SERVER_URL = 'http://<external-server-url>:<external-server-port>';
var REST_CONTEXT_ROOT = '/REST-Server/api';

function wlCommonInit() {
    /*
	* Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required.
	* This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	* Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	**/
	WL.Client.connect({
	     		onSuccess:  function() {},
	     		onFailure:  function() {}
	});

}

function callProtectedRestAPI() {
	var url = EXTERNAL_SERVER_URL + REST_CONTEXT_ROOT+PATH_PROTECTED;
	var request = new WLResourceRequest(url, WLResourceRequest.GET);
	request.send().then(
			function(response){
				showResult(response.responseJSON.description);
			},
			function(error){
				showErrorResult("failed to get scope!");
			}
	);
}

function callPublicRestAPI() {
	var url = EXTERNAL_SERVER_URL + REST_CONTEXT_ROOT+PATH_PUBLIC;
	var request = new WLResourceRequest(url, WLResourceRequest.GET);
	request.send().then(
			function(response){
				showResult(response.responseJSON.description);
			},
			function(error){
				showErrorResult("failed to get scope!");
			}
	);
}

function showResult(result) {
	$("#result").css("color", "green");
	$("#result").text(JSON.stringify(result));
}

function showErrorResult(result) {
	$("#result").css("color", "red");
	$("#result").text(JSON.stringify(result));
}