/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var attempt = 3;
alert("Make sure you register an account before trying to log in.");
//register an account
function register(){
	user = document.getElementById("username").value;
	pass = document.getElementById("password").value;
	if(user == "" || pass == ""){
		//make sure the user actually has a name and pass
		alert("You need to enter at least one character into each field.");
	}
	else{
		alert("You may now log in with your credentials.")
	}
}
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	//allow login if the password and username match what was registered
	if( username==user && password == pass){
		window.location="sample.html"
		return false;
	}
	else{
		//decrement login attempts if an incorrect combination is entered
		alert("Your username and password do not match our records, you have "+(attempt-1)+" attempts remaining.")
		attempt--;
	}
	if(attempt == 0){
		//disable all fields if the user fails all login attempts
		document.getElementById("username").disabled=true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		document.getElementById("reg").disabled = true;
		return false;
	}
}