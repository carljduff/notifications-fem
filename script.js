import data from "./data.json" assert { type: 'json'};

let app = document.getElementById("app");
let container = document.createElement("div");
container.className = "container"
app.append(container);
let count = 0; 


let headerWrapper = document.createElement("div");
headerWrapper.className = "header-wrapper";
let title = document.createElement("h1");
title.innerHTML = "Notifications";


let numOfNotifications = document.createElement("span");
numOfNotifications.className = "nums"
// numOfNotifications.innerHTML = count;

let buttonContainer = document.createElement("div");
let markAsRead = document.createElement("button");
markAsRead.addEventListener("click", markAll)
markAsRead.innerHTML = "Mark all as read";
buttonContainer.className = "read-button";
buttonContainer.append(markAsRead);
headerWrapper.append(title, numOfNotifications, buttonContainer);
container.append(headerWrapper)


data.users.map((item) => {
    let frame = document.createElement("div");
    frame.className = "frame"
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

    if(item.message !== false) {
        let message = document.createElement("p")
        message.innerText = item.message;
        frame.append(message)
    }

    if(item.read === false) {
        count++;
        numOfNotifications.innerHTML = count;
    }

    container.append(frame);
})


function markAll() {
    data.users.forEach((item) => {
        item.read = true;
        numOfNotifications.innerHTML = 0;
    })
}


