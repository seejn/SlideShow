       //creatng array to store images
       var img = new Array();
        var imgTag = document.querySelector('img');

        //function to add image in an array
        function addImg(image){            
            img.push(image);
        }

        //function to create a dot based on number of images in array
        //if 5 images are stored in a image array then 5 dot will be created
        function createDot(index){
            var dots = document.querySelector(".dots");
            var dot = document.createElement("div");
            dot.className = "dot";
            dot.setAttribute("onclick","changeImage(" + index+ ")");
            dots.appendChild(dot);
        }

        //function to display active dot 
        function dotActive(){
            var dot = document.querySelectorAll('.dot');

            for(let i = 0; i < dot.length; i++){
                if(imgTag.id == i){
                    dot[i].classList.add('active');                    
                }
                else
                    dot[i].classList.remove('active');
            }
        }

        //main function that control creation of dots 
        function dot(){
            var i = 0, len = img.length;
            while(i < len){
                createDot(i);
                i++;
            }
        }

        //function to change image in image container in html
        function changeImage(index){
            var imageName = img[index];
            source = "images/" + imageName;
            imgTag.id = index;
            imgTag.src = source;
            dotActive();
        }

        //function to change to next image
        function next(){
            var index = parseInt(imgTag.id);
            if(index == (img.length - 1)){
                index = 0;
            }
            else{
                index++;
            }
            changeImage(index);
        }

        //function to change to prev image
        function prev(){
            var index = parseInt(imgTag.id);
            if(index == 0){
                index = (img.length - 1);
            }
            else{
                index--;
            }
            changeImage(index);
        }

        //main function that initialized the images in image array and every other functions
        function slideShow(){

            let images = ["wallpaperflare.com_wallpaper (0).jpg", "wallpaperflare.com_wallpaper (1).jpg", "wallpaperflare.com_wallpaper (2).jpg", "wallpaperflare.com_wallpaper (3).jpg", "wallpaperflare.com_wallpaper (4).jpg", "wallpaperflare.com_wallpaper (5).jpg", "wallpaperflare.com_wallpaper (6).jpg", "wallpaperflare.com_wallpaper (7).jpg", "wallpaperflare.com_wallpaper (8).jpg", "wallpaperflare.com_wallpaper (9).jpg", "wallpaperflare.com_wallpaper (10).jpg", "wallpaperflare.com_wallpaper (11).jpg"];
            for(let i = 0; i < images.length; i++)
                addImg(images[i]); 
            dot();
            dotActive();
        }

        //fade animation
        function fade(){
            var n = 0.4;
            var start = Date.now();
            setIntervalId = setInterval(() => {
                var timeDiff = Date.now() - start;
                console.log(timeDiff);
                imgTag.style.opacity = 0 + n;
                n = n + 0.1;
                if(n > 1 || timeDiff > 1000){
                    clearInterval(setIntervalId);
                }
            }, 50, n, start);
            return;
        }
        //calling the slideShow function
        slideShow();

        //for the slideshow transition
        var setIntervalId = setInterval(() => {
            fade();
            next();
        }, 3000);