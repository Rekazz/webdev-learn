function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function searchElement() {
  var maxElem;
  var searchElem;
  var randomArr = [];
  var I;
  maxElem = document.getElementById("max-elem").type;
  searchElem = document.getElementById("search-elem").type;
  if (maxElem !== "number" || searchElem !== "number") {
    alert("Wrong, Please Type A Number!");x
    return 0;
  } else {
    maxElem = +document.getElementById("max-elem").value;
    searchElem = +document.getElementById("search-elem").value;
  }
  document.write("Output Arr: ");
  for (I = 0; I < maxElem; I++) {
    randomArr[I] = getRandomInt(1, 10);
    document.write("[", randomArr[I], "] ");
  }
  document.write("<br />");
  if (randomArr.indexOf(searchElem) != -1) {
    document.write("Search Elem: [", searchElem, "] Is Find! ");
  } else {
    document.write("Search Elem: [", searchElem, "] Isn't Find!");
  }
};