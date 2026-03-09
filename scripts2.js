



function details(event){
    event.preventDefault(); // stop page reload

    var username = document.getElementById("myUsername").value;
    var email = document.getElementById("myEmail").value;
    var password = document.getElementById("myPassword").value;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    if (username === "Om Mohan" && password === "12345") {
        alert("Login Successful");
    } else {
        alert("Login Failed");
    }
}

function addTask(){
    let input = document.getElementById('taskInput').value;
    if (input.trim() !== '') {
        let li = document.createElement('li');
        li.textContent = input;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = 'remove';
        removeBtn.onclick = () => li.remove();

        li.appendChild(removeBtn);
        document.getElementById('taskList').appendChild(li);
    }
}

function addImage(){
    const fileInput = document.getElementById("ImageInput");
    const imageContiainer = document.getElementById('imageContainer');
    let file = fileInput.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {

        imageContiainer.innerHTML = ''; // Clear previous images
        let wrapper = document.createElement('div');
        wrapper.style.display = 'inline-block';
        wrapper.style.margin = '10px';
        
        let img = document.createElement('img');
        img.src = e.target.result;
        img.alt = "User Image";
        img.style.width = "200px";
        imageContiainer.appendChild(img);
     
        let removeImageBtn = document.createElement("button");
        removeImageBtn.textContent = 'remove';
        removeImageBtn.onclick = () => wrapper.remove();

        wrapper.appendChild(img);
        wrapper.appendChild(removeImageBtn);
        document.getElementById('imageContainer').appendChild(wrapper);
        }
        reader.readAsDataURL(fileInput.files[0]);

  } 
}
