document.addEventListener('DOMContentLoaded',function(){
    var navLinks=document.querySelectorAll('nav li')
    for (i=0; i<navLinks.length;i++){
        navLinks[i].addEventListener('click', function(e){
            e.preventDefault()
            var targetId=this.dataset.target
            var target=document.getElementById(targetId)

            if (target){
                var position=target.offsetTop
            }

            window.scrollTo({
                top:position,
                behavior:'smooth'
            })
        })
    }

})