showNotes();


let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', (e)=>{
    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes')

    if (notes === null) {
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes)
    }

    notesObj.push(addTxt.value)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value = ""
    console.log(notesObj);

    showNotes();
})


function showNotes(){
    let notes = localStorage.getItem('notes')

    if (notes === null) {
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes)
    }

    let text = '';
    notesObj.forEach((element, index) => {
        text += `
        <div class="noteCard card mx-2 my-3" style="width: 33%">
          <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="del_${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
          </div>
      </div>`
    });

    let notesTxt = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesTxt.innerHTML = text;
    }else{
        notesTxt.innerHTML = `Nothing to show! Add note from above section`;
    }
}


function deleteNote(index){

    let notes = localStorage.getItem('notes')
    if (notes === null) {
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes)
    }


    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes();

}


let searchTxt = document.getElementById('searchTxt')
searchTxt.addEventListener('input', ()=>{

    let inputVal = searchTxt.value.toLowerCase()
    let noteCards = document.getElementsByClassName('noteCard');


    Array.from(noteCards).forEach((element)=>{

        let cardTxt = element.getElementsByTagName('p')[0].innerText

        if (cardTxt.includes(inputVal)) {
            element.style.display = "block"
            console.log("heelll");
        }else{
            element.style.display = "none"
            console.log("nnnn")
        }
    })
})