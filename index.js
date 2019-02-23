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
function afterBodyLoaded() {
    $('body').scrollspy({ target: ".navbar", offset: 50 });

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
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if

    });
    $("#map").html(HTMLMap);
}
function main() {

}

// main
document.write('<style class="hideStuff" ' +
    'type="text/css">body {display:none;}<\/style>');
var HTMLMap;

// wait for injected body and jquery to be available
var waitForMap = setInterval(function () {
    HTMLMap = document.getElementsByClassName("confirmation-page-sidebar map-sidebar-box")
    console.log("tesint for map:", HTMLMap);
    if (HTMLMap.length == 0) return
    HTMLMap = HTMLMap[0].outerHTML;
    clearInterval(waitForMap);
}, 10);

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

