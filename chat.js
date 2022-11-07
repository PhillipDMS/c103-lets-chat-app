// Your web app's Firebase configuration
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



