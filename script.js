fetch("https://dummyjson.com/users")
.then(response => response.json())
.then((data) => {
    // console.log(data.users[2].lastName)
    // console.log(data.users)
    
    let carousel = document.querySelector(".carousel")
    data.users.map((value, index)=>{
        // console.log(value.address)
        carousel.insertAdjacentHTML("beforeend",`
        <div class="column card">
            <div class="img" >
                <img src=${value.image} alt="img" draggable="false">
            </div>
            <div class="info">
                <p>${value.lastName}</p>
                <p>${value.university}</p>
            </div>
        </div>
        `)
    })
    // let hideFirstElement = carousel.firstElementChild
    // let img = carousel.firstElementChild.firstElementChild
    // hideFirstElement.style.background = "red"
    // hideFirstElement.style.visibility = "hidden";

    // console.log(img, "hello") 


// Add event listeners for the arrow buttons to scroll the carousel left and right

    const card = document.querySelectorAll(".card");
    const firstCardWidth = document.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper span");
    arrowBtns.forEach(btn =>{
        // const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        
            btn.addEventListener("click", ()=>{
                console.log(btn.id);
                carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
                carousel.scrollLeft = carousel.scrollLeft + (btn.id === "left" ? -firstCardWidth : firstCardWidth);
            })
            // if(card.length) {
                
                // }
    })
})

// slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1




const carousel = document.querySelector(".carousel");

let isDragging = false, startX, startScrollLeft;

const dragStart = (e)=>{
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX
    startScrollLeft = carousel.scrollLeft
}
const dragging = (e) =>{
    if(!isDragging)return // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    // console.log(e.pageX , "mousemove");
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

