        var img = new Array();
        var imgTag = document.querySelector('img');
        function addImg(image){            
            img.push(image);
        }
        function createDot(index){
            var dots = document.querySelector(".dots");
            var dot = document.createElement("div");
            dot.className = "dot";
            dot.setAttribute("onclick","changeImage(" + index+ ")");
            dots.appendChild(dot);
        }
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
        function dot(){
            var i = 0, len = img.length;
            while(i < len){
                createDot(i);
                i++;
            }
        }
        function changeImage(index){
            var imageName = img[index];
            source = "images/" + imageName;
            imgTag.id = index;
            imgTag.src = source;
            dotActive();
        }
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
        function slideShow(){

            let images = ["wallpaperflare.com_wallpaper (0).jpg", "wallpaperflare.com_wallpaper (1).jpg", "wallpaperflare.com_wallpaper (2).jpg", "wallpaperflare.com_wallpaper (3).jpg", "wallpaperflare.com_wallpaper (4).jpg", "wallpaperflare.com_wallpaper (5).jpg", "wallpaperflare.com_wallpaper (6).jpg", "wallpaperflare.com_wallpaper (7).jpg", "wallpaperflare.com_wallpaper (8).jpg", "wallpaperflare.com_wallpaper (9).jpg", "wallpaperflare.com_wallpaper (10).jpg", "wallpaperflare.com_wallpaper (11).jpg"];
            for(let i = 0; i < images.length; i++)
                addImg(images[i]); 
            // dot();
            // dotActive();
        }
        slideShow();
        var setIntervalId = setInterval(() => {
            next();
        }, 3000);