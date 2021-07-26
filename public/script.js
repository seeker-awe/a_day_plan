let food = ['burgers & Fries', "fish &chips"];
let fun = ['bike', 'tennis'];
let snack = ['popcorn', 'chips and dips'];
let tv = ['movie', 'tv series', 'console'];

// loop over list and add to page selections
for (let i = 0; i<food.length;i++) {
  document.getElementsByName("selection-food")[0].innerHTML += '<option value="' + food[i] + '">' + food[i] + "</option>";
};

for (let i = 0; i<fun.length;i++) {
  document.getElementsByName("selection-fun")[0].innerHTML += '<option value="' + fun[i] + '">' + fun[i] + "</option>";
};

for (let i = 0; i<snack.length;i++) {
  document.getElementsByName("selection-snack")[0].innerHTML += '<option value="' + snack[i] + '">' + snack[i] + "</option>";
};

for (let i = 0; i<tv.length;i++) {
  document.getElementsByName("selection-tv")[0].innerHTML += '<option value="' + tv[i] + '">' + tv[i] + "</option>";
};

function makePlan() {
  var food = document.getElementById("input-food").value;
  if (food.length == 0) {
    food = document.getElementsByName("selection-food")[0].value;
  }
  var fun = document.getElementById("input-fun").value;
  if (fun.length == 0) {
    fun = document.getElementsByName("selection-fun")[0].value;
  }
  var snack = document.getElementById("input-snack").value;
  if (snack.length == 0) {
    snack = document.getElementsByName("selection-snack")[0].value;
  }
  var tv = document.getElementById("input-tv").value;
  if (tv.length == 0) {
    tv = document.getElementsByName("selection-tv")[0].value;
  }

  var plan ="";
  let foodPlan = "we will enjoy some delicious " + food + " ";
  let funPlan = "for fun, you betta be ready for some " + fun + ". ";
  let snackPlan = "ther'e always room for some more food, let's enjoy a little " + snack + ". ";
  let tvPlan = "Finally let's chill on some " + tv;

  plan = foodPlan + funPlan + snackPlan + tvPlan;

  document.getElementById("outline").innerHTML = "<h5>" + plan + "</h5>"
  // document.getElementById('outline').innerHTML = "";
}
