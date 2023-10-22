let listAccordion = document.getElementsByTagName('button');  
let i;

      for (i = 0; i < listAccordion.length; i++) {
          listAccordion[i].addEventListener("click", function() {
            this.classList.toggle("active");
         
            let toggle = this.nextElementSibling;
          
          if (toggle.style.display === "block") {
            toggle.style.display = "none";
          } else {
            toggle.style.display = "block";
          }
        });
       }

       