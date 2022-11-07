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

username=localStorage.getItem("user_name");
  roomname=localStorage.getItem("room_name");
  function send(){
    msg=document.getElementById("msg").value ;
    firebase.database().ref(roomname).push({
        name:username,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
  }
