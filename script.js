const tabLinks= document.querySelectorAll('.tab-link');
const tabPanes= document.querySelectorAll('.tab-pane');
tabLinks.forEach(
    function(link,index){
        link.addEventListener('click',function(){ 
            tabPanes.forEach(function(pane,index){
                pane.style.display='none';
            });
            tabPanes[index].style.display='block';
        })
    }
);