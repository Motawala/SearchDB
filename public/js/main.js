
const firstnameInput = document.getElementById('firstname');
if(firstnameInput){
    firstnameInput.addEventListener('keypress', (event) =>{
        if(event.key == 'Enter'){
            event.preventDefault();
            search();
        }
    })
}

const lastnameInput = document.getElementById('lastname');
if(lastnameInput){
    lastname.addEventListener('keypress', (event) =>{
        if(event.key == 'Enter'){
            event.preventDefault();
            search();
        }
    })
}

const searchButton = document.getElementById('submit-search');
if(searchButton){
    searchButton.addEventListener('click', search)
}


//This function is used to search the details of the guest from the database.
async function search(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;

    //Converts the first character of the name to uppercase
    firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1)
    lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1)

    //Block sends a post req to the server to look for the name in the database
    try{
        await fetch("/lookup",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstname, lastname }),
        })
        .then(response => {
            return response.json()
        })
        .then(data =>{        
            const message = document.getElementById('message')
            if(data.firstname != undefined || data.lastname != undefined)
            {
                message.textContent = "Guest Found in the DNR Checklist " + data.firstname + " " + data.lastname
                
            }else{
                message.textContent = "Guest Not Found"
                
            }
        })

       
    }catch(error){
        console.log(error)
    }
}


const addGuest = document.getElementById('add-guest');
if(addGuest){
    addGuest.addEventListener('click',add)
}

async function add(){

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;

    firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1)
    lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1)


    const response = await fetch("/addGuest",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname }),
    })

    if(response.ok){
        const message = document.getElementById('message');
        message.textContent = "Guest Added to the DNR Checklist"
    }else{
        const message = document.getElementById('message');
        message.textContent = "Error Adding the Guest"
    }
}