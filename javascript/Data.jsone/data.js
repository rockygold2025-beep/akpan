const boxcontainer = document.querySelector(".boxcontainer")




fetch("./data.json")
    .then(res => res.json())
    .then(values => {
        values.Clubs.forEach(value => {
            CreateCard(value)

        })
    })
    .catch(error => console.error("Error Loading JSON:", error))

function CreateCard(club) {
    // this is where i created my element
    let card = document.createElement('div')
    card.classList.add("display"),
        card.innerHTML = `
       <div class="display">
            <img src="${club.src}" alt="" class="image">
            <div class="text">
                <h3>${club.clubs}</h3>
                <p>${club.manager}</p>
            </div>
            <div >
                <p class="footer">${club.founded} </p>
            </div>
        </div>
    `
    //this place is where i added card inside an element i created called( box container)
    boxcontainer.appendChild(card)
}
