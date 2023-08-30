console.log("Loading Scripts");

document.querySelectorAll('.category_btn').forEach(item =>{
    item.addEventListener('click' , setListDisplay)
});

function setListDisplay(event){    
    let list_attr = event.target.getAttribute('list');
    document.querySelectorAll('.category_btn').forEach(item =>{
        if (item === event.target){
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    if (list_attr ==="All"){
        document.querySelectorAll('.category_div').forEach(item =>{
            item.classList.add('active');
        });
    } else {
        document.querySelectorAll('.category_div').forEach(item =>{
            if (item.getAttribute('list') === list_attr){
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    

    
    
   
}