window.onload = function(){
    let newtask = document.getElementById('newtask')
    let addtask = document.getElementById('addtask')
    let todolist = document.getElementById('todolist')

    addtask.onclick=function(){
        let li = document.createElement('li')
        
      
         //Add the X button
     //   li.innerText= newtask.value
        let xBtn = document.createElement('button')
        xBtn.innerText = 'x'
        xBtn.onclick = function(event){
            event.target.parentElement.remove()
        }

        let upBtn = document.createElement('button')
        upBtn.innerText = 'UP'
        upBtn.onclick = function(event){
            //event.target = the up button
            //event.target.parentelement = the <li> item
            //event.target.parentElement.parentElement is the todo list

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, // insert this element
                event.target.parentElement.previousElementSibling //before previous element
            )


        }

        
        let downBtn = document.createElement('button')
        downBtn.innerText = 'DOWN'
        downBtn.onclick = function(event){

                event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling, // insert next element
                event.target.parentElement //before current element
            )
        }


          //Add the task
          let taskSpan = document.createElement('span')
          taskSpan.innerText = newtask.value


        li.appendChild(xBtn)
        li.appendChild(upBtn)
        li.appendChild(downBtn)
        li.appendChild(taskSpan)
        todolist.appendChild(li)
    }


}