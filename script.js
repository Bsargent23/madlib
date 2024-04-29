
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

  var storyData = {
    timestamp: Date.now(),
    story: story,
    verb: verb,
  animal: animal,
  thing: thing,
  adjective: adjective
  };

  console.log("storyData: " + storyData);

  var storyJSON = JSON.stringify(storyData);
  console.log("storyJSON: " + storyJSON);
  return storyData;
}

// create a function to save the madlib
function saveMadLib() {
  console.log("saveMadLib() called");
}
  
var storyData = createMadLib()

db.collection("madlibs").doc(storyData.storyName).set(storyData); alert(storyData.storyName + " saved to database!");


// create a function to retrieve the madlib
function retrieveMadLib() {
  console.log("retrieveMadLib() called");
}

document.getElementById("story").innerHTML = ""


// create a function to edit the madlib
function editMadLib() {
  console.log("editMadLib() called");
}


// create a function to delete the madlib
function deleteMadLib() {
  console.log("deleteMadLib() called");
}


