(()=>{"use strict";function e(){let e=document.createElement("div");e.classList.add("homepage-content");let t=document.createElement("div");t.classList.add("text-div");let n=document.createElement("h3");n.textContent="Imagination can Sustain!";let d=document.createElement("h4");d.textContent="Let's Think and Eat!";let a=document.createElement("p");a.textContent="With some thought, with soem imagination, we can let our meal time be our play time. Lets let our imagination run wild and enjoy a feast for the ages!",t.appendChild(n),t.appendChild(d),t.appendChild(a);let i=document.createElement("div");i.classList.add("image-div");let l=document.createElement("img"),c=document.createElement("img");return l.setAttribute("src","https://pbs.twimg.com/media/EXoZZXqXkAUW79U.jpg"),c.setAttribute("src","https://i.pinimg.com/600x315/aa/4b/9a/aa4b9a1af84dbf54437fbe411350c167.jpg"),l.setAttribute("id","image1"),c.setAttribute("id","image2"),i.appendChild(l),i.appendChild(c),e.appendChild(t),e.appendChild(i),e}function t(){let e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.firstChild)}const n=document.querySelector("#content");let d=e();n.appendChild(d);let a=document.getElementById("home"),i=document.getElementById("menu"),l=document.getElementById("contact");i.addEventListener("click",(()=>{t();let e=function(){let e=document.createElement("div");e.classList.add("homepage-content");let t=document.createElement("div");t.classList.add("text-div");let n=document.createElement("h3");n.textContent="Menu!";let d=document.createElement("h4");d.textContent="Use that Noggin of yours.";let a=document.createElement("p");return a.textContent="Whatever you imagine, you can eat!",t.appendChild(n),t.appendChild(d),t.appendChild(a),e.appendChild(t),e}();n.appendChild(e)})),a.addEventListener("click",(()=>{t();let d=e();n.appendChild(d)})),l.addEventListener("click",(()=>{t();let e=function(){let e=document.createElement("div");e.classList.add("homepage-content");let t=document.createElement("div");t.classList.add("text-div");let n=document.createElement("h3");n.textContent="Contact";let d=document.createElement("h4");d.textContent="The beauty of the mind";let a=document.createElement("p");return a.textContent="We are located right in your mind. No reservations no bookings required. Think and we shall appear!",t.appendChild(n),t.appendChild(d),t.appendChild(a),e.appendChild(t),e}();n.appendChild(e)}))})();