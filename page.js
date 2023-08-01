function back(){
    window.location= "Kwitter_room.html";
    
    }
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
    
    username = localStorage.getItem("signtochat");
    roomname = localStorage.getItem("roomname");
    
    function send() {
        write = document.getElementById("send").value;
        firebase.database().ref(roomname).push({
            message: write,
            like: 0,
            name:username
        });
        document.getElementById("send").value="";
    }

    function getData() {
        console.log("insidegetdata");
        firebase.database().ref("/" + roomname).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                    firebase_message_id = childKey; message_data = childData;
    
                    console.log(firebase_message_id);
                    uname = message_data["name"];
                    message = message_data["message"];
                    like = message_data["like"];
     
                     nametag="<h4>"+uname+"</h4>";
                     messagetag="<h4 class='messageh4'>"+message+"</h4>";
                     liketag="<button class= 'btn btn-primary' id="+firebase_message_id+ " value= "+like+" onclick='updatelike(this.id)'>";
                     spantag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+" </span></button><hr>";
                     row=nametag+messagetag+liketag+spantag;
                     document.getElementById("output").innerHTML+=row;
                }
            });
        });
    }
    getData();
    
    
    function updatelike(messageid){
    like=document.getElementById(messageid).value;
    updatelike=Number(like)+1;
    firebase.database().ref(roomname).child(messageid).update({
    like:updatelike
    
    });
    
    }