// JavaScript Document
function handler(){
	  var Inputfile = document.getElementById("upload_img");
	  
	  var data = new FormData();
	  if(Inputfile.files.length < 1){
		     alert("please select image to be uploaded");
		  }
	else{ 
		 data.append('img',Inputfile.files[0]);
   
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		  if(xmlhttp.responseText == "uploaded"){
				window.location = "notes_body.html#log_chat"; 
			  }
		 
		 }
                                        };
			xmlhttp.open('POST','http://server9.000webhost.com/fishpond.site88.net/image_upload.php',true);
			xmlhttp.setRequestHeader('cache-control','no-cache');
			xmlhttp.send(data);
	  }
	  
		return false;	
	}
function log_in_validate(){
	
	   var user_name = document.querySelector("#username_1").value;
	   var password = document.querySelector("#password_1").value;
	   var validator = 1;
	    var data = "user_name="+user_name+"&password="+password+"&val="+validator;
	  if(user_name == "" || user_name == null)
	         alert("user name field is empty");
	  else if(password == "" || password == null)
	         alert("password field is empty");
	else{
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		    if(xmlhttp.responseText== "pass"){
				     getUser(); chatting();
		              window.location = "notes_body.html#chat";}
			 else
			      alert(xmlhttp.responseText);
		 }
		   
                                        };
			xmlhttp.open('POST','http://server9.000webhost.com/fishpond.site88.net/log_in.php',true);
xmlhttp.setRequestHeader("content-Type","application/x-www-form-urlencoded");
			xmlhttp.send(data);
	              }
	  
		return false;	
	}
	
function add(){
	  
	   var user_name = document.querySelector("#username_3").value;
	   var phone_number = document.querySelector("#mobile_3").value;
	   var validator = 1;
	    var data = "user_name="+user_name+"&mobile="+phone_number+"&val="+validator;
	    if(user_name == "" || user_name == null)
	         alert("user name field is empty");
	  else if(password == "" || password == null)
	         alert("password field is empty");
else{
	   
	 if(user_name == "" || user_name == null)
	         alert("user name field is empty");
	  else if(password == "" || password == null)
	         alert("password field is empty");
	else{		 
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
              chatting();
			  document.querySelector("#username_3").value = "";
				document.querySelector("#mobile_3").value = "";
		    if(xmlhttp.responseText== "pass"){
				
				phone_number = "";
		              window.location = "notes_body.html#chat";}
			 else
			      alert(xmlhttp.responseText);
		 }
		   
                                        };
			xmlhttp.open('POST','http://server9.000webhost.com/fishpond.site88.net/inbox_add.php',true);
xmlhttp.setRequestHeader("content-Type","application/x-www-form-urlencoded");
			xmlhttp.send(data);
	}}
	  
		return false;	
	}
	
function log_in_publish_validate(){
	
	   var user_name = document.querySelector("#username_2").value;
	   var password = document.querySelector("#password_2").value;
	   var validator = 1;
	    var data = "user_name="+user_name+"&password="+password+"&val_="+validator;
	 if(user_name == "" || user_name == null)
	         alert("user name field is empty");
	  else if(password == "" || password == null)
	         alert("password field is empty");
	else{
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		    if(xmlhttp.responseText== "pass"){
				       document.querySelector("#username_2").value = "";
	                   document.querySelector("#password_2").value = "";
		              window.location = "notes_body.html#body_admin_publish";}
			 else
			      alert(xmlhttp.responseText);
		 }
		   
                                        };
			xmlhttp.open('POST','http://server9.000webhost.com/fishpond.site88.net/log_in.php',true);
xmlhttp.setRequestHeader("content-Type","application/x-www-form-urlencoded");
			xmlhttp.send(data);
	}
	  
		return false;	
	}
	
		
function log_out_validate(){
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		  document.querySelector("#username_1").value = "";
	             document.querySelector("#password_1").value = "";
				  document.querySelector("#username_2").value = "";
	              document.querySelector("#password_2").value = "";
		    if(xmlhttp.responseText== "pass"){
		              window.location = "notes_body.html#enter";}
			 else
			      alert(xmlhttp.responseText);
		 }
		   
                                        };
xmlhttp.open('GET','http://server9.000webhost.com/fishpond.site88.net/log_out.php',true);
xmlhttp.send();
	  
	  
		return false;	
	}              

function msg_cover(a){

	setTimeout( function msg_cover_2(){
 
		document.querySelector("#to_id").value = a;
		return false;
	},5);  
	
function new_msg(){	
	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		if(document.querySelector("#message").innerHTML = xmlhttp.responseText){
			
			}
		
		 
		 }
                                        };
xmlhttp.open("GET","http://server9.000webhost.com/fishpond.site88.net/get_msg.php?str="+a+"&id_fun="+1,true);
xmlhttp.send();
    
}
     setTimeout(new_msg,5);
   
   function msg(){
	
	    var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		     if(xmlhttp.responseText == "yes")
	                 new_msg();
		 
		 }
                                        };
xmlhttp.open("GET","http://server9.000webhost.com/fishpond.site88.net/checker.php",true);
xmlhttp.send();

	}
	setInterval(msg,5);
	}