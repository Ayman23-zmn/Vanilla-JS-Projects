const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []


// adding an event listener for our filter element
filter.addEventListener('input', (e) =>filterData (e.target.value))

async function getData(){
    // The fetch function is a built-in JavaScript function that allows you to make HTTP requests. It returns a promise that resolves to the response of the request. In this script, fetch is used to send a GET request to the URL 'https://randomuser.me/api/?results=50'.
    const res = await fetch('https://randomuser.me/api/?results=100') // we ask for 50 results, means 50 user info

    //store user json objects in data variable
    const {results} = await res.json()

    // print out the json dataset
    // console.log(data)

    //clear results
    result.innerHTML = ''

    // for each user, create a list items for them
    results.forEach(user => {
        const li = document.createElement('li')

        //append each user to empty listItem list
        listItems.push(li)

        // for each elemnt
        li.innerHTML = `
        <img src = '${user.picture.large}' alt = '${user.name.first}'>
        <div class = 'user-info'>
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city} , ${user.location.country}</p>
        </div>    
        `
        result.appendChild(li)
    })

}


function filterData(searchTerm){
    // console.log(searchTerm) // checking if search texts are being corectly typed or not
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}



getData()