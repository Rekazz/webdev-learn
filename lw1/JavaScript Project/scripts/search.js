function GetRandomInt(Min, Max) {
  return Math.floor(Math.random() * (Max - Min + 1)) + Min;
}

function Search() {
  var MaxElem;
  var SearchElem;
  var Arr = [];
  var I;
  MaxElem = +document.getElementById("max-elem").value;
  SearchElem = +document.getElementById("search-elem").value;
  document.write("Output Arr: ");
  for (I = 0; I < MaxElem; I++) {
    Arr[I] = GetRandomInt(1, 10);
    document.write("[", Arr[I], "] ");
  }
  document.write("<br />");
  if (Arr.indexOf(SearchElem) != -1) {
    document.write("SearchElem: [", SearchElem, "] Is Find! ");
  } else {
    document.write("SearchElem: [", SearchElem, "] Isn't Find!");
  }
}