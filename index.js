// methods at top to make it easier to test by copy pasting
function loadjscssfile(filename, filetype, callback) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script')
        fileref.src = filename
        fileref.async = false
        if (callback) {
            fileref.onload = function () {
                callback();
            }
        }
    } else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined")
        document.head.appendChild(fileref);
}
var HTMLBodyLocation = ""
function afterOriginalElements() {
    console.log("running afterOriginalElements");
    // scrape data

    //scrape guests
    if (window.location.hostname === "wendrei2019.app.rsvpify.com") {
        for (i = 0; i < guestElements.length; i++) {
            if (!guestElements[i].nextElementSibling.firstChild.className.includes("declined")) guests = guests + (guestElements[i].title) + ", "
        }
        guests = guests.slice(0, -2)
        console.log(guests)
        // scrape change rsvp link
        RSVPLink = document.querySelector(".confirmation-page-sidebar-wrapper > .btn").href;
        console.log(RSVPLink)
    }
 
    // remove existing HTML
    document.head.innerHTML = "";
    document.body.innerHTML = "";

    // get and inject our HTML
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () { //after my html is injected
        if (this.readyState == 4 && this.status == 200) {
            loadjscssfile("https://mdbootstrap.com/previews/docs/latest/js/mdb.min.js", "js", function () {
                objectFitImages();
                jarallax(document.querySelectorAll('.jarallax'));
                jarallax(document.querySelectorAll('.jarallax-keep-img'), {
                    keepImg: true,
                });
                document.body.innerHTML = HTMLbody;
        
            });
            HTMLbody = xhttp.responseText;
            // inject custom HTML and custom data that was scraped
            var waitForCustomHTML = setInterval(function () {
                if (document.getElementById("btnChangeRSVP") === null) return
                clearInterval(waitForCustomHTML);
                customHTMLLoaded = true;
            }, 10);
        }
    };


    // production
    if (window.location.hostname === "wendrei2019.app.rsvpify.com") HTMLBodyLocation = "https://jackgaino.com/sp/WeddingWebsite/body.html"
    // local
    if (window.location.hostname === "localhost") HTMLBodyLocation = "http://localhost:3000/body.html"

    xhttp.open("GET", HTMLBodyLocation, true);
    xhttp.send();

    //inject CCS
    loadjscssfile("https://mdbootstrap.com/previews/docs/latest/css/mdb.min.css", "css");
    loadjscssfile("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "css")
    loadjscssfile("https://fonts.googleapis.com/css?family=Indie+Flower", "css")

    loadjscssfile("https://fonts.googleapis.com/css?family=Dancing+Script", "css")
    // inject JS
    loadjscssfile("https://mdbootstrap.com/previews/docs/latest/js/jquery-3.3.1.min.js", "js");
    loadjscssfile("https://mdbootstrap.com/previews/docs/latest/js/popper.min.js", "js");
    loadjscssfile("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", "js");

    // wait for injected body and jquery to be available
    var waitForCustomDependencies = setInterval(function () {
        // if jquery not available do not clear interval
        if (typeof $ === 'undefined') return
        // if custom html not ready yet do not clear interval
        if (!customHTMLLoaded) return
        clearInterval(waitForCustomDependencies);
        afterCustomDependencies()
    }, 1);
}
function afterCustomDependencies() {
    console.log("running afterCustomDependencies");
    if (window.location.hostname === "wendrei2019.app.rsvpify.com") {
        console.log(guests);
        document.getElementById("guests").innerText = guests
        document.getElementById("btnChangeRSVP").href = RSVPLink + "#custom"
    } else {
        document.getElementById("guests").innerText = "Stefan Panait, Wendy Li, The Sheep"
    }

    // enable popovers
    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    //enable scrollpy
    $('body').scrollspy({ target: ".navbar", offset: 100 });

    // Add smooth scrolling on all links inside the navbar
    $("#top-navbar a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash;
            });
        } // End if

    });
}

// starting point - hide everything
document.write('<style class="hideStuff" ' +
    'type="text/css">body {display:none;}<\/style>');

var guestElements = document.getElementsByClassName("confirmation-page-guest-name");
var RSVPLink;
var customHTMLLoaded = false;
var HTMLbody;
var guests = "";

// wait RSVPify data to load so i can scrape some of it
var waitForOriginalElements = setInterval(function () {
    if (window.location.hostname === "wendrei2019.app.rsvpify.com") {
        if (typeof guestElements[0] === 'undefined' || typeof guestElements[0].nextElementSibling.firstChild.className === 'undefined') return
    }
    clearInterval(waitForOriginalElements);
    afterOriginalElements();
}, 1);