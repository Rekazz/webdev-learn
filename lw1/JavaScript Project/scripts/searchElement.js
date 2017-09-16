function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function searchElement() {
  var maxElem;
  var searchElem;
  var randomArr = [];
  var i;
  maxElem = +document.getElementById("max-elem").value;
  searchElem = +document.getElementById("search-elem").value;
  if (maxElem == "" || searchElem == "" || isNaN(maxElem) || isNaN(searchElem)) {
    alert("Wrong, Please Type A Number!");
    return 0;
  }
  document.write("Output Arr: ");
  for (i = 0; i < maxElem; i++) {
    randomArr[i] = getRandomInt(1, 10);
  }
  randomArr.forEach(function(item, i, randomArr) {
    document.write("[" + item + "]");
    return 0;
  });
  document.write("<br />");
  if (randomArr.indexOf(searchElem) != -1) {
    document.write("Search Elem: [", searchElem, "] Is Find! ");
  } else {
    document.write("Search Elem: [", searchElem, "] Isn't Find!");
  }
};