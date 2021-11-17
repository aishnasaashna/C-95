
const firebaseConfig = {
    apiKey: "AIzaSyC_NyeMGKYTZjtt7dknHsCW9sDxMdwFBIg",
    authDomain: "kwitter-53b89.firebaseapp.com",
    databaseURL: "https://kwitter-53b89-default-rtdb.firebaseio.com",
    projectId: "kwitter-53b89",
    storageBucket: "kwitter-53b89.appspot.com",
    messagingSenderId: "472035635920",
    appId: "1:472035635920:web:23c222848e52fab6fa64d5"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
function adduser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}