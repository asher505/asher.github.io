//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages);
hideall();
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    //show the page
    onepage.style.display = "flex"; // change to flex
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});

// Show Page 1 by default when the page loads
window.addEventListener("load", function () {
    show(1);
});

/*for hamMenu */
const hamBtn = document.querySelector("#hamIcon");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");
function toggleMenus() { /*open and close menu*/
    menuItemsList.classList.toggle("menuShow");
}//can optimize using toggle class with css transitions

/*for scrolling*/
function smoothScrollTo(elementId) {
    const targetElement = document.querySelector(elementId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
}

const scrollButton = document.querySelector('#scrollButton');
scrollButton.addEventListener('click', function () {
    smoothScrollTo('#targetElement');
});

const scrollButton2 = document.querySelector('#scrollButton2');
scrollButton2.addEventListener('click', function () {
    smoothScrollTo('#targetElement2');
});


function showPopUp(text) {
    // Selects the element from html so javascript can use
    const popup = document.querySelector("#popup");
    const popupContent = document.querySelector("#popupContent");

    // Change the content of the pop-up based on the button pressed
    // innerHTML sets the content
    switch (text) {
        case "text1":
            popupContent.innerHTML = "<button class='close-button' onclick='closePopUp()'>Close</button><h3>Water changes.</h3><br><p>Frequent water changes are important to keep a healthy tank. <br><br>It removes toxins and waste, maintains water quality, prevents algae growth, reduces harmful nitrates, and most importantly keeps fish and plants healthy.<br><br>Water changes should be done at least once a week minimum! They do not take too long and are incredibly vital in maintaining your tank.</p>";
            break;
        case "text2":
            popupContent.innerHTML = "<button class='close-button' onclick='closePopUp()'>Close</button><h3>Cleaning your filter.</h3><br><p>Firstly, it is detrimental that any aquarium has a filter(unless you know what you're doing). Filters help to maintain the water quality, adds biological filtration(live beneficial bacteria), and keeps your tank healthy, amongst other benefits.<br><br>Cleaning it regularly will help to maintain all these benefits and will greatly help in supporting you aquarium.<br><br>Smaller filters can be cleaned every two weeks and be deep cleaned every month. Larger filters require cleaning every month and deep cleanings every three months.<br><br>MAKE SURE <b><i>NOT</i></b> TO WASH YOUR BIOLOGICAL FILTRATION IN TAP WATER! THIS WILL KILL THE BENEFICIAL BACTERIA!</p>";
            break;
        case "text3":
            popupContent.innerHTML = "<button class='close-button' onclick='closePopUp()'>Close</button><h3>Trimming.</h3><br><p>Regular trimming of your plants first and foremost helps you maintain your aquariums' aesthetic. A well groomed tank is a sight for sore eyes.<br><br>Additionally, it isn't just for looks. Regular trimming helps to promote plant growth and also ensures that you take care of any old and/or decaying leaves. The decaying leaves break down and leech excess nutrients into your tank. This can lead to an algae problem. Unkept plants can become overgrown and crowd areas, looking ugly.<br><br>How frequent you have to trim depends on your plants. If you have fast growers like Hygrophila, Ludwigia, Rotala, they may require weekly trimming. Slow growers like Monte Carlo only require once every 4-6 weeks.</p>";
            break;
        case "montecarlo":
            popupContent.innerHTML = "<button class='close-button' onclick='closePopUp()'>Close</button><h3>Monte Carlo.</h3><br><p>Monte Carlo (Micranthemum tweediei) is a low-growing, carpeting aquatic plant native to South America. With its bright green, round leaves, it forms a lush carpet effect in aquariums when provided with moderate to high light and CO2. Easy to care for, it serves as an oxygenator, provides shelter for fish and invertebrates, and helps control algae. Ideal for foreground and midground placement, adding an elegant touch to aquascapes.</p>";
            break;
        case "rotala":
            popupContent.innerHTML = "<button class='close-button' onclick='closePopUp()'>Close</button><h3>Rotala.</h3><br><p>Rotala is a versatile aquatic plant genus known for its vibrant colors and delicate, feathery leaves. It comes in various species, each offering unique shades ranging from green to pink and red. Rotala is popular among aquarium enthusiasts for adding vertical accents and background foliage. It requires moderate to high light and CO2 supplementation for optimal growth and coloration. A stunning choice to create lush and visually striking aquascapes.</p>";
            break;
        case "hydro":
            popupContent.innerHTML = "<button class='close-button' onclick='closePopUp()'>Close</button><h3>Hydrocotyle Tripartita.</h3><br><p>Hydrocotyle Tripartita is a small, carpeting aquatic plant with intricate, divided leaves. It is often used in aquascaping to create lush, green foregrounds in aquariums. This low-maintenance plant thrives under moderate lighting and can spread rapidly to form a dense and attractive carpet-like appearance. Perfect for adding a touch of elegance to your underwater landscape.</p>";
            break;
            
    }

    // Remove to hide the pop up if one was already shown
    popup.classList.remove("active");

    // Show the pop up, the class "active" is added so that it will use the class which shows the popup
    popup.classList.add("active");
}

function closePopUp() {
    const popup = document.querySelector("#popup");

    // Hide the pop up by removing the active class
    popup.classList.remove("active");
}

// modal
function openModal(item) {
    const itemData = getLocalstorageItems();
    currentitem = item;
    let currentValue = itemData[currentitem]
    quantity = currentValue
    modalpointer.classList.remove("hidemodal");
}


function closeModal() {
    currentitem = "";
    modalpointer.classList.add("hidemodal");
    return;
}