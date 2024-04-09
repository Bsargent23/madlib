function madlib() {

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
  return storyJSON;
}





