var firebaseConfig = {
    apiKey: "AIzaSyBw-ghpYlAibkZ-MyLWeiHdMMLX_xbRJVY",
    authDomain: "whatsapp-ccc40.firebaseapp.com",
    databaseURL: "https://whatsapp-ccc40.firebaseio.com",
    projectId: "whatsapp-ccc40",
    storageBucket: "whatsapp-ccc40.appspot.com",
    messagingSenderId: "174249312973",
    appId: "1:174249312973:web:15972671cba87e967bdf84",
    measurementId: "G-MQCRSHST9C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }