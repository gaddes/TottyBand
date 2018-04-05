function showhideButton() {
  if (document.getElementById('button_1').innerHTML == "Click here to see more!") {
    document.getElementById('button_1').innerHTML = "Click here to see less!";
    document.getElementById('showhide').style.display = 'block';
  } else {
    document.getElementById('button_1').innerHTML = "Click here to see more!"
    document.getElementById('showhide').style.display = 'none';
  }
}
