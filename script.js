import data from "./data.json" assert { type: 'json'};

let app = document.getElementById("app");
let container = document.createElement("div");
container.className = "container"
app.append(container);
let count = 0; 
let frame;
let circle;
let headerWrapper = document.createElement("div");
headerWrapper.className = "header-wrapper";
let title = document.createElement("h1");
title.innerHTML = "Notifications";


let numOfNotifications = document.createElement("span");
numOfNotifications.className = "nums"
// numOfNotifications.innerHTML = count;

let buttonContainer = document.createElement("div");
let markAsRead = document.createElement("button");
markAsRead.className = "read-button"
markAsRead.addEventListener("click", markAll)
markAsRead.innerHTML = "Mark all as read";
buttonContainer.className = "btn-container";
buttonContainer.append(markAsRead);
headerWrapper.append(title, numOfNotifications, buttonContainer);
container.append(headerWrapper)


data.users.map((item) => {
    frame = document.createElement("div");
    frame.className = "frame bgcolor"
    let img = document.createElement("img");
    img.src = item.img;
    let name = document.createElement("p");
    name.innerText = item.name;
    let notification = document.createElement("p");
    notification.innerText = item.notification;
    frame.append(img, name, notification);
    if(item.link !== false) {
        let link = document.createElement("p")
        link.innerText = item.link;
        frame.append(link)
    }
    
    if(item.picMessage) {
        let messagePic = document.createElement("img");
        messagePic.src = item.picMessage;
        messagePic.className = "messagePic";
        frame.append(messagePic)
    }

    if(item.read === false) {
        count++;
        numOfNotifications.innerHTML = count;
        circle = document.createElement("div");
        circle.className = "circle";
        frame.append(circle);
    }

    if(item.message !== false) {
        let message = document.createElement("p")
        message.className = "message";
        message.innerText = item.message;
        frame.append(message)
    }
    
    

    container.append(frame);
})


function markAll() {
    data.users.forEach((item) => {
        item.read = true;
        numOfNotifications.innerHTML = 0;
        let circles = document.querySelectorAll(".circle");

        circles.forEach((item) => {
            item.classList.remove("circle");
        })

        let frame = document.querySelectorAll(".bgcolor");

        frame.forEach((item) => {
            item.classList.remove("bgcolor")
        })
    })
}


