const itemcont = document.querySelector('.item_cont');
const backArrow = document.querySelector('.move_back');
const frontArrow = document.querySelector('.move_foward');
const item = document.querySelectorAll('.item');
const lapItem = document.querySelectorAll('.laptop_item');
const intro = document.querySelector('.intro');
const introItems = document.querySelector('.intro_items');
const categories = document.querySelector('#filter_phones');
const viewBtn = document.querySelector('.view');
//phone product element
const phoneName = document.querySelectorAll('.name');
const phoneDate = document.querySelectorAll('.release-date');
const phoneDetails = document.querySelectorAll('.device-information');
const phoneImage = document.querySelectorAll('.phone_image');
// laptop product element
const lapName = document.querySelectorAll('.laptop_name');
const lapDate = document.querySelectorAll('.laptop_release_date');
const lapDetails = document.querySelectorAll('.laptop_device_information');
const lapImage = document.querySelectorAll('.laptop_url');
const filterLap = document.querySelector('#filter_laptops')
const display = document.querySelector('.device');
const displayName = document.querySelector('.display_name');
const displayInfo = document.querySelector('.display_information');
const displayImg = document.querySelector('.display_image');
//to close display
const cancel = document.querySelector('.cancel');
const clickMe = document.querySelector('.click_me');
const links = document.querySelectorAll('.links')
//for mobile menu 
const navMenu = document.querySelector('.nav_total_menu');
const hamMenu = document.querySelector('.ham_menu');
const navMenuOverlay = document.querySelector('.nav_menu_overlay')
const itemDisplayOverlay = document.querySelector('.overlay')
const bodyVar = document.querySelector('body')
//function for removing menu
function removeMenu () {
    navMenu.classList.remove('open')
    bodyVar.classList.remove('active')
    hamMenu.classList.remove('active')
};
//for toggling the menu 
hamMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('open')
    bodyVar.classList.toggle('active')
    hamMenu.classList.toggle('active')
});

//remove menu when body is clicked
navMenuOverlay.addEventListener('click', ()=> {
    removeMenu()
});
//removing active clas on click
Array.from(links).forEach(link => {
    link.addEventListener('click', ()=> {
        removeMenu()
    })
});
Array.from(viewBtn).forEach((e) => {
    e.addEventListener('click', () => {

    })
});

//for adding and removing intro animation
clickMe.addEventListener('click', () => {
    introItems.classList.remove('active')
    setTimeout(() => {
        introItems.classList.add('active')
    }, 10)
});


// function to remove product display overlay
function removeProdOverlay() {
    display.classList.remove('active')
    document.body.style.overflowY = "scroll"
}
//for canceling display for device info
cancel.addEventListener('click', () => {
    removeProdOverlay()
});

//remove product display when body is clicked 
itemDisplayOverlay.addEventListener('click', ()=> {
    removeProdOverlay()
})
//creating array out of the devices
const itemArray = Array.from(item);
const lapItemArray = Array.from(lapItem);

//for handling displaying product details
itemArray.forEach(ite => {
    ite.addEventListener('click', (e) => {
        //get index of the clicked item
        const index = itemArray.indexOf(ite)
        if (e.target.matches('button')) {
            const view = e.target
            const action = view.dataset.action
            if (action === 'view') {

                //getting html data and adding to the display element
                display.classList.add('active')
                displayName.innerHTML = phoneName[index].innerHTML
                displayInfo.innerHTML = phoneDetails[index].innerHTML
                displayImg.src = phoneImage[index].src
                document.body.style.overflow = "hidden"
            } else {
                ite.classList.remove('selected');
            }
        }
    })
})


lapItemArray.forEach(lapIte => {
    lapIte.addEventListener('click', (e)=> {
         //get index of the clicked item
        const index = lapItemArray.indexOf(lapIte)
        if (e.target.matches('button')) {
            const view = e.target
            const action = view.dataset.action
           
            if (action === 'view') {
        
                //getting html data and adding to the display element
                display.classList.add('active')
                displayName.innerHTML = lapName[index].innerHTML
                displayInfo.innerHTML = lapDetails[index].innerHTML
                displayImg.src = lapImage[index].src
                
                document.body.style.overflow = "hidden"
            } else {
                ite.classList.remove('selected')
            }
        }
    })
});

//for filtering devices by type
categories.addEventListener('change', (e) => {
    let conts = document.getElementsByClassName('item');
    for (let i = 0; i < conts.length; i++) {
        let cont = conts[i];
        if (cont.classList.contains(e.target.value)) {
            cont.style.display = 'flex'
        } else {
            cont.style.display = 'none'
        }

    }
});

filterLap.addEventListener('change', (e)=> {
    lapItemArray.forEach(lapItem => {
        if (lapItem.classList.contains(e.target.value)){
            lapItem.style.display = 'flex'
        } else {
            lapItem.style.display = 'none' 
        }
    })
})