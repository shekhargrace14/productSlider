fetch("https://dummyjson.com/users")
.then(response=>response.json())
.then((data) =>{
    // data.user.slice
    console.log()

    const nerArr = data.users.slice(0,15);
    const carousel = document.querySelector(".carousel");
    // console.log(carousel);

    nerArr.map((value)=>{
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
    const card = document.querySelector(".card");
    const singleCardWidth = card.offsetWidth;
    const arrows = document.querySelectorAll("span")
    arrows.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            // console.log(btn.id);
            // console.log(btn.className);
            carousel.scrollLeft += btn.id === "left" ? -singleCardWidth -16 : + singleCardWidth +16;

            
            const leftArrow = document.querySelector("#left")
            const rightArrow = document.querySelector("#right")
            // console.log(leftArrow)
            // console.log(ca)
            // console.log(carousel.scrollLeft, "singleCardWidth");

            if(carousel.scrollLeft > 0){
                // if(1){
                    leftArrow.style.display = "block";
                // leftArrow.classList.remove = "arrowHidden";
            }else{
                    leftArrow.style.display = "none";
                // leftArrow.classList.add = "arrowHidden";

            }
            // if(carousel.scrollLeft === )
                
        
            // console.log(carousel.scrollLeft + carousel.offsetWidth + 5 , ":", carousel.scrollWidth )
            // console.log(carousel.offsetWidth, "offsetWidth Display")
            // console.log(carousel.scrollWidth, "scrollWidth total Width")
            // console.log(carousel.scrollLeft, "scrollLeft")
            if(carousel.offsetWidth + carousel.scrollLeft + 5  > carousel.scrollWidth){
                rightArrow.style.display = "none";
            }else{
                rightArrow.style.display = "block";

            }
        })
    const wrapper = document.querySelector(".carousel");
        // console.log(carousel.scrollWidth === carousel.scrollLeft)
                
    })


// const carousel = document.querySelector(".carousel");


let isDragging = false, startX, startScrollLeft;
// let startX ;
// let startScrollLeft;

const dragStart = (e)=>{
    isDragging = true;
    carousel.classList.add("dragging");
    // Record the initial cursor and scroll position of the carousel.
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
    
    console.log(startX, "startX")
    const leftArrow = document.querySelector("#left")
    const rightArrow = document.querySelector("#right")
    if(carousel.scrollLeft == 0){
        leftArrow.style.display = "none";
        // leftArrow.style.backgroundColor = "red";
    }else{
        leftArrow.style.display = "block";
        // leftArrow.style.backgroundColor = "green";

    }
    if(carousel.offsetWidth + carousel.scrollLeft + 5  > carousel.scrollWidth){
        rightArrow.style.display = "none";
    }else{
        rightArrow.style.display = "block";

    }
    
}

const dragging = (e)=>{
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);


}

const dragStop =()=>{
    isDragging = false;
    carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

})
