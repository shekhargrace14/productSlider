fetch("https://dummyjson.com/users")
.then(response=>response.json())
.then((data) =>{
    // console.log(data)

    const carousel = document.querySelector(".carousel");
    // console.log(carousel);

    data.users.map((value)=>{
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
                
        
            console.log(carousel.offsetWidth, "offsetWidth Display")
            console.log(carousel.scrollWidth, "scrollWidth total Width")
            console.log(carousel.scrollLeft, "scrollLeft")
            if(carousel.offsetWidth + carousel.scrollLeft == carousel.scrollWidth){
                rightArrow.style.display = "none";
            }else{
                rightArrow.style.display = "block";

            }
        })
    const wrapper = document.querySelector(".carousel");
        // console.log(carousel.scrollWidth === carousel.scrollLeft)
        



        
    })




})