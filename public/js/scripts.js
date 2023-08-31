console.log("Loading Scripts");

document.querySelectorAll('.update_task').forEach(item =>{
    item.addEventListener('change' , updateTask)
});

function updateTask(event){
    let form = event.target.form;
    console.log('form', form)
    form.submit();
}

document.querySelectorAll('#add_task').forEach(item =>{
    item.addEventListener('submit' , addTask)
});

function addTask(event){
    event.preventDefault();
    console.log("Prevented");
    let radio = document.querySelector( 'input[name="list"]:checked');
    let task_text = document.querySelector('[name="task_text"]').value;
    if(radio && task_text!= ""){
        event.target.submit();
    }

}

document.querySelectorAll('#close').forEach(item =>{
    item.addEventListener('click' , closeWithoutSave)
});

function closeWithoutSave(){
    form_div.classList.remove('show');  
    let radio = document.querySelector( 'input[name="list"]:checked'); 
    if(radio){
        radio.checked = false;
    }

    let task_text = document.querySelector('[name="task_text"]');
    task_text.value = "";
}

document.querySelectorAll('.add_task').forEach(item =>{
    item.addEventListener('click' , displayTaskForm)
});

function displayTaskForm(event){
    let list_attr = event.target.getAttribute('list');
    let form_div = document.getElementById('form_div');
    form_div.classList.add('show'); 
    let radio = document.querySelector(`input[name="list"][value=${list_attr}]`);  
    radio.checked = true;
}

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
    let radio = document.querySelector(`input[name="list"][value=${list_attr}]`);  
    if(radio){
        radio.checked = true;  
    }
    
}