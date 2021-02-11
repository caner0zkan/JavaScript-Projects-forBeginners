const todoAdd = document.getElementById("buttonAdd");

//ADD
todoAdd.addEventListener("click", () => {
  var p = document.createElement("p");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  p.appendChild(t);
  p.setAttribute("class" , "mission");
  p.setAttribute("oclick" , "todoLine(this)");

  var html = `${inputValue} <button onclick="todoDelete(this)" class="buttonDelete"><i class="fas fa-trash trash"></i>`;
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
function todoDelete(e){
  e.parentNode.remove();
}
