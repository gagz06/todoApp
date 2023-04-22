const deleteButton=document.getElementById('Delbtn');
const CheckBox    =document.querySelectorAll('.my-checkbox'); 

const addButton   =document.getElementById('Addbtn');
const inputField  =document.getElementById('Description');
const selectField =document.getElementById('cat');
const dateField   =document.getElementById('mydate'); 


addButton.addEventListener('click',function(){
    if(inputField.value=="" || selectField.value=="" || dateField.value==""){
        alert('Please Enter the details.');
        return ;
    }else{
        return;
    }
});


deleteButton.addEventListener('click',function(){
    for(let i=0;i<CheckBox.length;i++){
        if(CheckBox[i].checked==true)
        {
            console.log('here');
            return;
        }
    }
    alert('Please Select Valid Responses To Delete');
});