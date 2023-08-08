let navbar= document.getElementById("navigation-bar");
        let navOffset = navbar.offsetTop;
        console.log("Reached");
     window.addEventListener("scroll", () => {
         if(window.scrollY >= navOffset)
         {
          navbar.style.position="sticky";
         }
         else{
          navbar.style.positoion="relative";
         }
        });