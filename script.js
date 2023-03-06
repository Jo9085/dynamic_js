/*----------*/

var footer = document.querySelector('footer');

var nbClicks = 0;

footer.addEventListener('click', function() {
    nbClicks ++ ;
    console.log(`Click numero ${nbClicks}`);
});

/*----------*/

var hamburger = document.getElementsByClassName("navbar-toggler")[0];
var toToggle = document.getElementById('navbarHeader');

var showBurger = function() {
    toToggle.classList.toggle("collapse")
};

hamburger.addEventListener('click', showBurger);

/*----------*/

var card1 = document.getElementsByClassName("card mb-4 box-shadow")[0];
var button1 = card1.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

var redText = function () {
    card1.style.color = 'red' ;
};

button1.addEventListener('click', redText);

/*----------*/

var card2 = document.getElementsByClassName("card mb-4 box-shadow")[1];
var button2 = card2.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

var greenText = function () {
    if (card2.style.color === 'green'){
        card2.style.color = '';
    }
    else {
        card2.style.color = 'green'
    }
}

button2.addEventListener('click', greenText)

/*----------*/

var navbar = document.getElementsByClassName('navbar navbar-dark bg-dark box-shadow')[0];
var cdnLink = document.querySelector('link');

var removeLink = function() {
    cdnLink.disabled = true;
    console.log('le css should be gone')
};

navbar.addEventListener('dblclick', removeLink);

/*if (cdnLink.disabled === true) {
    document.body.addEventListener('dblclick', function(){
        console.log('test')
    })
}*/


/*----------*/

var cards = document.getElementsByClassName("card mb-4 box-shadow");

for (let i =0; i < cards.length; i++) {
    button = cards[i].getElementsByClassName('btn btn-sm btn-success')[0];

    var changeCard = function () {
        img = cards[i].getElementsByClassName('card-img-top')[0];
        text = cards[i].getElementsByClassName('card-text')[0];

        text.classList.toggle("collapse");
    
        if (img.style.width === '20%') {
            img.style.width =''
        }
        else {
            img.style.width = '20%'
        }   
    }

    button.addEventListener('mouseover', changeCard);
}

/*----------*/

var arrowButton = document.getElementsByClassName('btn btn-secondary my-2')[0];

var rotate = function() {
    var row = document.getElementsByClassName('row')[1];
    lastChild = row.lastElementChild; 
    row.insertBefore(lastChild, row.children[0]);

}

arrowButton.addEventListener('click', rotate); 


/*----------*/

var leftarrowButton = document.getElementsByClassName('btn btn-primary my-2')[0];

var unrotate = function(e) {
    e.preventDefault();

    var row = document.getElementsByClassName('row')[1];
    firstChild = row.firstElementChild; 
    row.insertBefore(firstChild, null);

    /* marche aussi avec row.lastElementChild.nextSibling à la place de null */

}

leftarrowButton.addEventListener('click', unrotate); 

/*----------*/

var logo = document.getElementsByClassName('navbar-brand d-flex align-items-center')

logo.addEventListener('keypress', changeBody)