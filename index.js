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
function afterJQueryLoaded() {
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
                window.location.hash = hash;
            });
        } // End if

    });
}
function main() {
    // remove existing HTML
    document.head.innerHTML = "";
    document.body.innerHTML = "";
    // get and inject our HTML
    var xhttp = new XMLHttpRequest();
    var HTMLbody = "";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            HTMLbody = xhttp.responseText;
            document.body.innerHTML = HTMLbody;
        }
    };

    var HTMLBodyLocation = ""
    // production
    if (window.location.hostname === "wendrei2019.app.rsvpify.com") HTMLBodyLocation = "https://jackgaino.com/sp/WeddingWebsite/body.html"
    // local
    if (window.location.hostname === "localhost") HTMLBodyLocation = "http://localhost:3000/body.html"

    xhttp.open("GET", HTMLBodyLocation, true);
    xhttp.send();


    //inject CCS
    loadjscssfile("https://mdbootstrap.com/previews/docs/latest/css/mdb.min.css", "css");
    loadjscssfile("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "css")
    // inject JS
    loadjscssfile("https://mdbootstrap.com/previews/docs/latest/js/jquery-3.3.1.min.js", "js");
    loadjscssfile("https://mdbootstrap.com/previews/docs/latest/js/popper.min.js", "js");
    loadjscssfile("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", "js");
    loadjscssfile("https://mdbootstrap.com/previews/docs/latest/js/mdb.min.js", "js", function () {
        objectFitImages();
        jarallax(document.querySelectorAll('.jarallax'));
        jarallax(document.querySelectorAll('.jarallax-keep-img'), {
            keepImg: true,
        });
    });


    // wait for injected body and jquery to be available
    var waitForJQuery = setInterval(function () {
        // if jquery not available do not clear interval
        if (typeof $ === 'undefined') return
        // we should check for main element's existence here
        clearInterval(waitForJQuery);
        afterJQueryLoaded()
    }, 10);
}

// starting point
document.write('<style class="hideStuff" ' +
    'type="text/css">body {display:none;}<\/style>');
main();