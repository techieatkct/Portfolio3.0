const firebaseConfig = {
    apiKey: "AIzaSyCrryINxxXInTHEfG2pThenKebFDYEKKA4",
    authDomain: "portfolio3-d73a4.firebaseapp.com",
    databaseURL: "https://portfolio3-d73a4-default-rtdb.firebaseio.com",
    projectId: "portfolio3-d73a4",
    storageBucket: "portfolio3-d73a4.appspot.com",
    messagingSenderId: "40584680298",
    appId: "1:40584680298:web:99350c6a4ac7adeb5a8b13"
  };
firebase.initializeApp(firebaseConfig);

//creating reference
var registrationformdb = firebase.database().ref('Registrationform')

//get values from html file
document.getElementById("registrationform").addEventListener("submit", submitfrom);

function submitform(e) {
  e.preventDefault();

  var name = document.getElementById("name");
  var emailid = document.getElementById("emailid");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");
  
saveMessages(name, emailid, subject, message);
  document.querySelector(".alert").style.display;

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("registrationform").reset();
  }


const saveMessages = (name, emailid, subject, message) => {
  var newregistrationform = registrationformdb.push();

  newregistrationform.set({
    name: name,
    emailid: emailid,
    subject: subject,
    message: message
  });
};


const getElementVal = (id) => {
  return document.getElementById(id).value;
};