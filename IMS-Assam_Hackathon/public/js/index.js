//this is the way i followed in the tutorial..
//the below 4 lines should be copied in the login and register.html page
//<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>
//<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-auth.js"></script>
//<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-database.js"></script>
//<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-storage.js"></script>




var firebaseConfig = {
    apiKey: "AIzaSyDBEXwsUwfPQRR49LCxU5s2XNRI45wXhOg",
    authDomain: "inventory-database-c1c1a.firebaseapp.com",
    databaseURL: "https://inventory-database-c1c1a.firebaseio.com",
    projectId: "inventory-database-c1c1a",
    storageBucket: "inventory-database-c1c1a.appspot.com",
    messagingSenderId: "1050627793567",
    appId: "1:1050627793567:web:d595a01677ee822e9df8aa",
    measurementId: "G-794JN8FJD2"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function()
  {
    var email = $("#email").val();
    var password = $("#password").val();

    if (email != "" && password != ""){
        var result = firebase.auth().signInWithEmailAndPassword(email,password);

        result.catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode);
          console.log(errorMessage);

          window.alert('Message : ' + errorMessage);
        });
  }
    else{
          window.alert('Please Enter the Email ID and password');
    }
  });