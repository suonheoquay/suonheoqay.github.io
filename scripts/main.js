const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image-1.png") {
    myImage.setAttribute("src", "images/image-2.png");
  } else {
    myImage.setAttribute("src", "images/image-1.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my website, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my website, ${storedName}`;
  }
  
myButton.onclick = () => {
    setUserName();
};
