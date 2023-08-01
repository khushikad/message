function back(){
window.location= "index.html";

}
username = localStorage.getItem("signtochat");
document.getElementById("username").innerHTML = "Welcome " + username;



const firebaseConfig = {
    apiKey: "AIzaSyDKzBtgYeVTlpAlrxh3r5BA16HMSxn6iX0",
    authDomain: "projectchat-202f1.firebaseapp.com",
    databaseURL: "https://projectchat-202f1-default-rtdb.firebaseio.com",
    projectId: "projectchat-202f1",
    storageBucket: "projectchat-202f1.appspot.com",
    messagingSenderId: "363285504902",
    appId: "1:363285504902:web:37b88de50258713f4fc207"
    
};
firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='roomname' id='" + Room_names + "' onclick='redirectToRoom(this.id)'>" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

//End code
});});}
getData();

function addroom() {
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({ purpose: "adding room name" });
    localStorage.setItem("roomname", roomname);
    window.location = "page.html";

}




function redirectToRoom(roomname) {

    localStorage.setItem("roomname", roomname);
    window.location = "page.html";

}