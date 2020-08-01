let name;
        do{
            name = "Sai Laxmi"
        }while(name == '' || name == null || name == undefined);
        document.getElementById("name").innerHTML = name;
        var countDownDate = new Date("Aug 1, 2020 23:59:59").getTime();
        var x = setInterval(function(){
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days= Math.floor(distance / (1000 * 60 * 60 *24));
        var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 *60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("greet").innerHTML = days + " days<br>" + hours + " hours<br> " + minutes + " minutes<br> " + seconds + " seconds\n ";
        }, 1000);
        
         var music = document.getElementById("music")
  music.load();
  document.addEventListener("click", function() {
  music.play()
  })
        
        // Add all your JS here
