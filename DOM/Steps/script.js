var box = document.querySelectorAll('.div');

box.forEach(function(item){

    item.dataset.flag = 0;

    item.addEventListener("click",function(){
       
        var flag = item.dataset.flag;

        if(flag == 0)
        {
            item.style.backgroundColor = "violet";
            item.dataset.flag = 1;
        }
        else
        {
            item.style.backgroundColor = "blue";
            item.dataset.flag = 0;
        }
        
    })

})