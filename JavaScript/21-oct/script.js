function saveLocalData() {
  var NameKey = document.getElementById("nameKey");
  localStorage.setItem("nameKey", NameKey.value);

  var NameValue = document.getElementById("nameValue");
  localStorage.setItem("nameValue", NameValue.value);

}

function saveSessionData() {
 

  var NameKey = document.getElementById("nameKey");
  sessionStorage.setItem("nameKey",NameKey.value);

  var NameValue = document.getElementById("nameValue");
  sessionStorage.setItem("nameValue",NameValue.value);

}

function clearData() {
   localStorage.clear();
   sessionStorage.clear();
  }