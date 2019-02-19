console.log("testing v2")


document.body.innerHTML = "";
//document.body.style.backgroundImage = "url('https://i.ibb.co/cbZNZqV/weddingwebsitebackground.png')";

loadjscssfile("https://mdbootstrap.com/previews/docs/latest/css/mdb.min.css", "css");
loadjscssfile("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", "css")

document.body.innerHTML = '\
<main>\
<div class="view jarallax" style="height: 100vh;">\
  <img class="jarallax-img" src="https://i.ibb.co/cbZNZqV/weddingwebsitebackground.png" alt="">\
  <div class="mask rgba-blue-slight">\
    <div class="container flex-center text-center">\
      <div class="row mt-5">\
        <div class="col-md-12 col-xl-8 mx-auto wow fadeIn">\
          <h1 class="display-3 font-weight-bold mb-2 wow fadeInDown" data-wow-delay="0.3s">Hi Cutie!</h1>\
        </div>\
      </div>\
    </div>\
  </div>\
</div>\
<div class="container">\
  <!--Grid row-->\
  <div class="row my-5 py-4">\
    <!--Grid column-->\
    <div class="col-md-12 text-center">\
      <p align="justify">Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime.</p>\
      <p class="mb-0" align="justify">Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime.</p>\
    </div>\
    <!--Grid column-->\
  </div>\
  <!--Grid row-->\
</div>\
</main>';



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
      //document.body.appendChild(fileref);
      document.head.appendChild(fileref);
    }