const todoAdd = document.getElementById("buttonAdd");
const todoDelete1 = document.getElementsByClassName("buttonDelete");

//ADD
todoAdd.addEventListener("click", () => {
  var p = document.createElement("p");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  p.appendChild(t);
  p.setAttribute("class" , "mission");

  var html = `${inputValue} <button onclick="todoDelete()" class="buttonDelete"><i class="fas fa-trash trash"></i>`;
  p.innerHTML = html;

  if(inputValue == ""){
      alert("You must write something!");
  }
  else{
      document.getElementById("todoMissions").appendChild(p);
  }
  document.getElementById("input").value = "";
});


//DELETE
function todoDelete(){
  var close = document.getElementsByClassName("buttonDelete");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function(){
      var div = this.parentElement;
      div.remove("mission");
    }
  }
}
