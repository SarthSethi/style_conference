//fetch all the boxes
let boxes=document.getElementsByClassName('speaker');
//hiide all the boxes
Array.from(boxes).forEach((e)=>{e.style.display = 'none'});
// unhide the first one
Array.from(boxes)[0].style.display = 'block';

const speakerTiles=document.getElementsByClassName('speakerTile');
Array.from(speakerTiles).forEach((element) =>{
    const actualSpeakerId=element.getAttribute('data-id');
    element.addEventListener('click',() => {
        const speakersections=document.getElementsByClassName('speaker');
        Array.from(speakersections).forEach((element)=>{
            element.style.display='none';
        }
        );
        document.getElementById(actualSpeakerId).style.display='block';
        document.getElementById(actualSpeakerId).scrollIntoView();
    })
})
