const contentItems = document.querySelectorAll(".content-items");
        const imageUrls = ['images/healthyBig1.png', 'images/healthyBig2.png', 'images/healthyBig3.png', 'images/healthyBig4.png', 'images/healthyBig5.png'];
        const newDates = ['02 May 2023', '04 July 2023', '11 Aug 2023', '05 Oct 2023', '26 Dec 2023'];
        const increase = document.querySelector("#plus");
      const decrease = document.querySelector("#minus");
      const close = document.querySelector("#close");
      const lightboxContent = document.querySelector("#lightboxImg");
      const lBC = document.querySelector(".lightboxContent");
      const lightbox = document.querySelector(".lightbox");
      const big = document.querySelector("#big");
      const analytics = document.querySelector(".analytics");

        contentItems.forEach(item => {
        const btns = item.querySelector(".button");
        const stats = item.querySelector(".stats"); // Not used, can be removed
        const title = item.querySelector(".span");
        const title1 = title.innerHTML;

        btns.addEventListener('click', function () {
        const heading = document.querySelector("#mainHead");
        
        const dates = document.querySelector("#mainDate");

        for (let i = 0; i < contentItems.length; i++) {
            if (contentItems[i] !== item) {
                contentItems[i].classList.remove('active');
            } else {
                item.classList.toggle('active');
            }
            heading.innerText = title1; // Set the heading to the title of the clicked item
        }

            const itemIndex = Array.from(contentItems).indexOf(item);
            big.src = imageUrls[itemIndex];
            mainDate.innerHTML = newDates[itemIndex]; 
            big.addEventListener('click', function(){
                lightbox.style.display = "block";
                lightboxContent.src = imageUrls[itemIndex];
                lightboxContent.style.width = 'auto';
                lightboxContent.style.height = '80%';
            });
            stats.addEventListener('click', function(){
                lightbox.style.display = "block";
                lightboxContent.src = stats.src;
            })
    });
});

// controller
      
      
      increase.addEventListener('click', function(){
        let width = lightboxContent.clientWidth;
        let height = lightboxContent.clientHeight;
        lightboxContent.style.height = (height + 20) + "px";
        lightboxContent.style.width = "auto";
      });
      decrease.addEventListener('click', function(){
        let width = lightboxContent.clientWidth;
        let height = lightboxContent.clientHeight;
        lightboxContent.style.height = (height - 20) + "px";
        lightboxContent.style.width = "auto";
      });

      close.addEventListener('click', function(){
        lightbox.style.display = 'none';
        lightboxContent.style.width = "auto"
        lightboxContent.style.height = "40%"
        
      });
      analy1.addEventListener('click', function(){
        lightbox.style.display = "block";
        lightboxContent.src = analy1.src;
      });

      analy2.addEventListener('click', function(){
        lightbox.style.display = "block";
        lightboxContent.src = analy2.src;
      });
      big.addEventListener('click', function(){
        lightbox.style.display = "block";
        lightboxContent.src = big.src;
        lightboxContent.style.width = 'auto';
                lightboxContent.style.height = '80%';
      });
  