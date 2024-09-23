let userList = JSON.parse(localStorage.getItem("userList")) || [];
let editIndex = null;
var enterfname = document.getElementById("inputfname");
var enterlname = document.getElementById("inputlname");
var enteremail = document.getElementById("inputemail");
var enterphone = document.getElementById("inputphone");
var submitButton = document.getElementById("submitButton");
var updateButton = document.getElementById("updateButton");

// document.addEventListener("DOMContentLoaded", () => {
//   submitButton.disabled = true;
// });

const handleSubmit = () => {
  //   console.log(enterfname, enterlname, enteremail, enterphone);
  //   localStorage.setItem("firstName", enterfname);
  //   localStorage.setItem("lastName", enterlname);
  //   localStorage.setItem("email", enteremail);
  //   localStorage.setItem("phone", enterphone);
  //   var enteremail = document.getElementById("inputemail")

  // console.log(enteremail);
  // Create a new user object

  // Clear any previous error message
  document.getElementById("errorMsg").innerText = "";

  // Validation: check if any field is empty
  if (
    !enterfname.value ||
    !enterlname.value ||
    !enteremail.value ||
    !enterphone.value
  ) {
    document.getElementById("errorMsg").innerText = "All fields are required!";
    return; // Stop the form submission
  }

  let newData = {
    fname: enterfname.value,
    lname: enterlname.value,
    email: enteremail.value,
    phone: enterphone.value,
  };
  //   console.log(newData);

  // pushdata into array

  userList.push(newData);
  localStorage.setItem("userList", JSON.stringify(userList));
  tableRender();

  // Clear the input fields

  enterfname.value = "";
  enterlname.value = "";
  enteremail.value = "";
  enterphone.value = "";
};

// document.addEventListener("DOMContentLoaded", () => {
// let userList = [
//   {
//     fname: "vijay",
//     lname: "kumar",
//     email: "vkumar@gmail.com",
//     phone: "100025",
//   },

//   {
//     fname: "zaheer",
//     lname: "khan",
//     email: "zahkhan@gmail.com",
//     phone: "2000089",
//   },

//   {
//     fname: "edwin",
//     lname: "david",
//     email: "edwin@gmail.com",
//     phone: "330025",
//   },

//   {
//     fname: "ashwin",
//     lname: "raj",
//     email: "ashraj@gmail.com",
//     phone: "400025",
//   },
// ];

const handleDelete = (index) => {
  console.log(index);

  userList.splice(index, 1);
  localStorage.setItem("userList", JSON.stringify(userList));

  tableRender();
};

function handleEdit(index) {
  editIndex = index;
  submitButton.disabled = true;
  updateButton.disabled = false;

  const obtainedObj = userList[index];
  console.log(obtainedObj);

  enterfname.value = obtainedObj.fname;
  enterlname.value = obtainedObj.lname;
  enteremail.value = obtainedObj.email;
  enterphone.value = obtainedObj.phone;
}

function handleUpdate() {
  var obj = {
    fname: enterfname.value,
    lname: enterlname.value,
    email: enteremail.value,
    phone: enterphone.value,
  };
  userList[editIndex] = obj; //

  localStorage.setItem("userList", JSON.stringify(userList));

  enterfname.value = "";
  enterlname.value = "";
  enteremail.value = "";
  enterphone.value = "";
  submitButton.disabled = false;
  updateButton.disabled = true;
  editIndex = null;
  tableRender();
}

const tableRender = () => {
  document.getElementById("userDetails").innerHTML = userList
    .map((data, i) => {
      return `
      <tr>
        <th>${i + 1}</th> 
        <td>${data.fname}</td>
        <td>${data.lname}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
       <td> <button onclick="handleEdit(${i})" class='btn btn-primary'> Edit </button> </td>
       <td> <button onclick="handleDelete(${i})"  type="submit" class='btn btn-danger'> Delete </button> </td>

      </tr> 
    `;
    })
    .join("");
};
tableRender();

// });
