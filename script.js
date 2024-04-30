
// setup firebase app and firestore database
const firebaseConfig = {
  apiKey: "AIzaSyDqlsu1JVtO8uvvGo77B-A1QIzfew0t0sU",
  authDomain: "madlibs-7f4f8.firebaseapp.com",
  projectId: "madlibs-7f4f8",
  storageBucket: "madlibs-7f4f8.appspot.com",
  messagingSenderId: "354466264589",
  appId: "1:354466264589:web:9a2c3785e73c968de2c744"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("firebase setup complete!");

// create a function to create the madlib

function createMadLib() {

  console.log("madlib() called");
  var verb = document.getElementById("verb").value;

  var animal =
    document.getElementById("animal").value;

  var thing =
    document.getElementById("thing").value;

  var adjective =
    document.getElementById("adjective").value;

    document.getElementById("story").innerHTML = "Yesterday we went to the beach with a(n) <u>" + animal + "</u>, . We built a sandcastle with sand and a <u>" + thing + "</u>." + " The water was blue but also <u>" + adjective + "</u>." + " We had a race to see who could pick up seashells while <u>" + verb + "</u>.";

  
  var story = document.getElementById("story").innerHTML;
  console.log("story: " + story);
var storyName = document.getElementById("yourstoryname").value;
  var storyData = {
    timestamp: Date.now(),
    story: story,
    verb: verb,
  animal: animal,
  thing: thing,
  adjective: adjective,
  storyName:storyName
  
  };

  console.log("storyData: " + storyData);

  var storyJSON = JSON.stringify(storyData);
  console.log("storyJSON: " + storyJSON);
  return storyData;
}

// create a function to save the madlib
function saveMadLib() {
  console.log("saveMadLib() called");
  var storyData = createMadLib()
  db.collection("madlibs").doc(storyData.storyName).set(storyData); alert(storyData.storyName + " saved to database!");
}
  



// create a function to retrieve the madlib
function retrieveMadLib() {
  // this method will retrieve an exisiting madlib from the database
  console.log("retrieveMadLib() called");
//ask users to type in the name of story

  var storyName = prompt("Enter the name of the story you want to retrieve: "); 
  db.collection("madlibs")
  .doc(storyName)
  .get()
  .then((doc) => {
//if the madlib exists, display it, if not say "Story not found!"
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var StoryData = doc.data();
      document.getElementById("story").innerHTML = StoryData.story;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      documemt.getElementById("story").innerHTML = "No such document!";
    }
  })
  .catch((error) => {
  console.log("Error getting document:", error);
  document.getElementById("story").innerHTML = "Error    getting document!";
});
}






document.getElementById("story").innerHTML = ""


// create a function to edit the madlib
function editMadLib() {
  console.log("editMadLib() called");

  //ask user to retrieve existing madlib
  var storyName = prompt("Enter the name of the story you want to edit: ");
  db.collection("madlibs")
  .doc(storyName)
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var StoryData = doc.data();

      document.getElementById("verb").value = StoryData.verb
      document.getElementById("animal").value = StoryData.animal
      document.getElementById("thing").value = StoryData.thing
      document.getElementById("adjective").value = StoryData.adjective
      document.getElementById("storyName").value = storyData.storyName;
      

      
      document.getElementById("story").innerHTML = StoryData.story;
    } else {
      console.log("No such document!");
      document.getElementById("story").innerHTML = "No such document!";
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
    document.getElementById("story").innerHTML = "Error getting document!";
  });
}




// create a function to delete the madlib
function deleteMadLib() {
  // this method will delete an exisiting madlib from the database
  console.log("deleteMadLib() called");
  //ask user to retrieve existing madlib
  var storyName = prompt("Enter the name of the story you want to delete: ");
  db.collection("madlibs")
  .doc(storyName)
  .get()
  .then((doc) => {
  //if the madlib exists, delete it, if not say "Story not found!"
    if (doc.exists) {
      console.log("Document data:", doc.data());
      var storyData = doc.data();
      document.getElementById("story").innerHTML = 
        storyData.storyName + " deleted from database!";
      db.collection("madlibs").doc(storyName).delete();
    } else {
      //doc data will be undefined in this case
      console.log("No such document!");
      document.getElementById("story").innerHTML = "No such document!";
    }
    })
  .catch((error) => {
    console.log("errror getting document:", error);
    document.getElementById("story").innerHTML = "Error getting document!";
    
    
  });
}