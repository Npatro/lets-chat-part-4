//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAX5hfrFgo06t_sBkTsczbca_yRvQe7VZs",
    authDomain: "letschat-f6f46.firebaseapp.com",
    databaseURL: "https://letschat-f6f46-default-rtdb.firebaseio.com",
    projectId: "letschat-f6f46",
    storageBucket: "letschat-f6f46.appspot.com",
    messagingSenderId: "1097599521407",
    appId: "1:1097599521407:web:0aaac3e6c9dd3597a4a54a"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  room_name = local.storage.getItem("roomname");
  user_name = local.storage.getItem("username");

  console.log ("room name "+room_name);
  console.log ("user name "+user_name);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
//End code
 } });  }); }
getData();

function send(){
 msg=document.getElementById("msg").value;
 firebase.database.ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value="";
}

function logout(){
 localStorage.removeItem("room_name");
 localStorage.removeItem("user_name");
 window.location="index.html";
}