    class Task{
      constructor(taskId, name, descrip, assign, stat, date){
        this.taskId = taskId,
        this.name = name,
        this.descrip = descrip,
        this.assign = assign,
        this.stat = stat,
        this.date =date
      }
      addPreLoadedTask(){
        return `${this.taskId}, ${this.name}, ${this.descrip}, ${this.assign}, ${this.stat}, ${this.date}`;
      }
    }
    class TaskManager{

          constructor(){
          this.task = [];
          }
          getAllTasks(){}
          addTask(){}
          deleteTask(){}
          updateTask(){}
          assignTask(){}
    }

    const tk1 = new Task(1,"Uma","Shoping for Birthday","Suba", "Pending","2020-08-20");
    const tk2 = new Task(2,"Amutha","Project Sprint 3","uma", "Pending","2020-08-06");
    const tk3 = new Task(3,"Uma","Return Library books","shree", "In Progress","2020-08-20");

    tk1.addPreLoadedTask();
  tk2.addPreLoadedTask();
tk3.addPreLoadedTask();

console.log(Task);

//Form Elements Initialising
const taskName=document.querySelector("#taskName");
const description=document.querySelector("#description");
const assignee=document.querySelector("#assignee");
const taskDate=document.querySelector("#taskDate");
const status=document.querySelector("#status");

//Modal and Form Buttons 
const taskModal=document.querySelector("#task-modal");
const btnSave=document.querySelector("#btnSave");
const btnReset=document.querySelector("#btnReset");
const btnClose=document.querySelector("#btnClose");

// Add, Edit and Delete Buttons
const btnAdd=document.querySelector("#btnSave");
const btnEdit=document.querySelector("#btnEdit");
const btnDelete=document.querySelector("#btnDelete");

// Collecting task name value
const taskNameValue=document.querySelector("#taskName").value;
const descriptionValue=document.querySelector("#description").value;
const assigneeValue=document.querySelector("#assignee").value;
const taskDateValue=document.querySelector("#taskDate").value;
const statusValue=document.querySelector("#status").value;

var taskNameEvent = new Boolean(true);
var assigneeEvent = new Boolean(true);
var descriptionEvent = new Boolean(true);
var statusEvent = new Boolean(true);
var dateEvent = new Boolean(true);

btnAdd.addEventListener("click",function(event){
    clearAll();
    //Check Validation
    // $("#task-modal").modal("show");
});

btnSave.addEventListener("click",function(event){
    // if(taskName.value && assignee.value && description.value && status.value !==""){
    if(taskNameEvent && assigneeEvent && descriptionEvent && statusEvent){
            alert("I am Good");
            $('#staticBackdrop').modal("close");
            return true;
        }
    else{
        alert("I am not looking Good, Please Complete the form");
            // $('#staticBackdrop').modal('toggle');
            // $('#staticBackdrop').modal("show");
        return false;
    }
    // task.taskId= task.tasId++;
    // alert(task.taskId);

});

function clearAll(){
    
    taskNameValue.value =null;
    descriptionValue.value=null;
    assigneeValue.value=null;
    taskDateValue.value=null;
    statusValue.value=null;
}

//Task form validation  Begins here
taskName.addEventListener("input",function(event){
    if (event.target.value && event.target.value.length >= 3) {
        event.target.classList.remove("is-invalid");
        event.target.classList.add("is-valid");
        taskNameEvent= true;
    
      
    } else {
        event.target.classList.remove("is-valid");
        event.target.classList.add("is-invalid");
        taskNameEvent= false;
    }
    });

assignee.addEventListener("input",function(event){
    if (event.target.value && event.target.value.length >= 3) {
        event.target.classList.remove("is-invalid");
        event.target.classList.add("is-valid");
        assigneeEvent= true;
    } else {
        event.target.classList.remove("is-valid");
        event.target.classList.add("is-invalid");
        assigneeEvent = false;
    }
    });
description.addEventListener("input",function(event){
        if (event.target.value && event.target.value.length >= 3) {
            event.target.classList.remove("is-invalid");
            event.target.classList.add("is-valid");
            descriptionEvent=true;
        } else {
            event.target.classList.remove("is-valid");
            event.target.classList.add("is-invalid");
            descriptionEvent=false;
        }
        });

status.addEventListener("input",function(event){
    if (event.target.value ) {
        event.target.classList.remove("is-invalid");
        event.target.classList.add("is-valid");
        statusEvent=true;
    } else {
        event.target.classList.remove("is-valid");
        event.target.classList.add("is-invalid");
        statusEvent=false;
    }
    });

taskDate.addEventListener("input",function(event){
    alert(event.target.value);
    let date=isDate(event.target.value);
    if (date) {
        event.target.classList.remove("is-invalid");
        event.target.classList.add("is-valid");
        dateEvent=true;
    } else {
        event.target.classList.remove("is-valid");
        event.target.classList.add("is-invalid");
        dateEvent =false;
    }
    
    });  

function isDate(ExpiryDate) { 
    var objDate,  // date object initialized from the ExpiryDate string 
        mSeconds, // ExpiryDate in milliseconds 
        day,      // day 
        month,    // month 
        year;     // year 
    // date length should be 10 characters (no more no less) 
    if (ExpiryDate.length !== 10) { 
        return false; 
    } 
    // third and sixth character should be '-' 
    if (ExpiryDate.substring(2, 3) !== '-' || ExpiryDate.substring(5, 6) !== '-') { 
        return false; 
    } 
    // extract month, day and year from the ExpiryDate (expected format is mm/dd/yyyy) 
    // subtraction will cast variables to integer implicitly (needed 
    // for !== comparing) 
    month = ExpiryDate.substring(0, 2) - 1; // because months in JS start from 0 
    day = ExpiryDate.substring(3, 5) - 0; 
    year = ExpiryDate.substring(6, 10) - 0; 
    // test year range 
    if (year < 2020 || year > 3000) { 
        return false; 
    }else if(year < 2020){
        return false;
    
    }
    else{
        return true;
    }
 }
 ///Task Form Validation Ends here