//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDKtiAl6YetD7TzaPPJzZNVn3JQEsUaAOw",
    authDomain: "lets-chat-app-bac7c.firebaseapp.com",
    databaseURL: "https://lets-chat-app-bac7c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-bac7c",
    storageBucket: "lets-chat-app-bac7c.appspot.com",
    messagingSenderId: "324839353817",
    appId: "1:324839353817:web:ba419d92469075b641bdc8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name+ "!";

function addroom(){
    room_name=document.getElementById("add_room").value ;
firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="chat_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirecttoroomname(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="chat_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}