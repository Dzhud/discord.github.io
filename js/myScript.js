function toggle_vis(){
        
        var e = document.querySelector('.sign_up_body');
       if (e.style.display == 'block' || e.style.display == '') {
           e.style.display = 'none'; 
       }
       else {
           e.style.display = 'block';
       }
   }; 

var f = () => {
   
    let lis = document.querySelector(".sign_up_body");
        if (lis.style.display == 'block' || lis.style.display == '') {
           lis.style.display = 'none'; 
       }
       else {
           lis.style.display = 'block';
       }
    };

const toggleButton = document.getElementById('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', function() {
    for(var i=0; i<navbarLinks.length; i++)
        navbarLinks[i].classList.toggle('active')
});


