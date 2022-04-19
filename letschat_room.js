
    var firebaseConfig = {
      apiKey: "AIzaSyAX5hfrFgo06t_sBkTsczbca_yRvQe7VZs",
  authDomain: "letschat-f6f46.firebaseapp.com",
  databaseURL: "https://letschat-f6f46-default-rtdb.firebaseio.com",
  projectId: "letschat-f6f46",
  storageBucket: "letschat-f6f46.appspot.com",
  messagingSenderId: "1097599521407",
  appId: "1:1097599521407:web:0aaac3e6c9dd3597a4a54a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";


    function add_Room() {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room name",room_name);
      window.location= "letschat_page.html";
      firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Chat Room Name"
      });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " +Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="letschat_page.html";
}

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



