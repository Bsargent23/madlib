function madlib() {
  var animal =
    document.getElementById("animal").value;

  var thing =
    document.getElementById("thing").value;

  var adjective =
    document.getElementById("adjective").value;

  var verb = document.getElementById("verb").value;

  document.getElementById("output").innerHTML = "Yesterday we went to the beach with a(n) " + animal + ", . We built a sandcastle with sand and a " + thing + "." + " The water was blue but also " + adjective + "." + " We had a race to see who could pick up seashells while " + verb + ".";


  var story = document.getElementById("story").innerHTML; console.log("story: " + story);


  var storyData = {
    timestamp: Date.now(),
    story = story,
    verb ing: verb+ing
  noun - animal: noun - animal
  noun - thing: noun - thing
  adjective: adjective

};

var storyJSON = JSON.stringify(storyData);
console.log("storyJSON: " + storyJSON);
return storyJSON;
}
