const conatctForm = document.querySelector('.contact-form'); 

 

 let name = document.getElementById('name'); 

 let email = document.getElementById('email'); 

 let subject = document.getElementById('subject'); 

 let message = document.getElementById('message'); 

  

 

 //add event listener to fomr  

 conatctForm.addEventListener('submit', (e)=>{ 

    e.preventDefault(); // sending data via ajax, so we dont need page refreshing 

    //send this date , to node server to process, and send via email to relevant email address 

    let formData = { 

        name: name.value, 
        email: email.value, 
        subject: subject.value, 
        message: message.value 

    } 

    let xhr = new XMLHttpRequest(); 

    xhr.open('POST', '/'); 

    //convert data to json , becuase its an object and best way to send it  

    xhr.setRequestHeader('content-type','application/json');  

    xhr.onload = function(){ //this function will trigger once we recieve response from back-end 
        console.log(xhr.responseText); //log response recieved from server 

        if(xhr.responseText == 'success'){ 
            alert('Email sent'); // will clear form 
            name.value =''; 
            email.value =''; 
            subject.value =''; 
            message.value = ''; 

        }else{ 
            alert('Something went wrong!') 
        } 

    } 

 

    //send method  

    //we want to pass form data, cannot send json object to back-end 

    //has to be sent in string format 

    xhr.send(JSON.stringify(formData)); 

 

    //ADJUST SERVER.JS FILE TO RECIEVE PEICE OF INFO 

 

 }) 