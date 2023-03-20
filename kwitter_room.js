var firebaseConfig = {
     apiKey: "AIzaSyBcFFxyYtemd7c8T4HNINHLooS7K6HmOf4",
     authDomain: "kwitter-18f8d.firebaseapp.com",
     databaseURL: "https://kwitter-18f8d-default-rtdb.firebaseio.com",
     projectId: "kwitter-18f8d",
     storageBucket: "kwitter-18f8d.appspot.com",
     messagingSenderId: "1022795291010",
     appId: "1:1022795291010:web:f55f32ddf631da01f2579b"
   };


//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom(){
     room_name = document.getElementById("room_name").value;

     firebase.datatbase().ref("/").child(room_name).update({

     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " +Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(tgis.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row
      //End code
      });});}
getData();

     function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}

