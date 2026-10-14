function addtask(){
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Write something!");
        return;
    }

    const li = document.createElement("li");
    // li.textContent = taskText;


    const span = document.createElement("span");
    span.textContent = taskText;
        // إنشاء زر الحذف
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "delete-btn";
    
     // عند الضغط على زر الحذف
    deleteBtn.onclick = function(){
        li.remove();
    }

    // تجميع العناصر داخل li
    li.appendChild(span);
    li.appendChild(deleteBtn);   
    
    // li.onclick = function(){
    //     this.remove();
    // }

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

    const input = document.getElementById("taskInput");

    input.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            addtask();
        }
});
