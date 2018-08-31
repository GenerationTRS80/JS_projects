/*jshint esversion: 6 */

const canvas =document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Use let and not const because const you can't redefine anything
let img = new Image();
let filename = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');


// Add filters and Effects
// Note: target anything with a filter-btn
document.addEventListener('click',console.log("Open Doc"));
document.addEventListener('click', e => {

  if(e.target.classList.contains('filter-btn')){
    // console.log(9912399);
    if(e.target.classList.contains('brightness-add')){
      Caman('#canvas',img,function(){
        this.brightness(5).render();
      });
    } else if (e.target.classList.contains('brightness-remove')){
      Caman('#canvas',img,function(){
        this.brightness(-5).render();
      });
    } else if (e.target.classList.contains('contrast-add')){
      Caman('#canvas',img,function(){
        this.contrast(20).render();
      });
    } else if (e.target.classList.contains('contrast-remove')){
      Caman('#canvas',img,function(){
        this.contrast(-20).render();
      });
    } else if (e.target.classList.contains('saturation-add')){
      Caman('#canvas',img,function(){
        this.saturation(30).render();
      });
    } else if (e.target.classList.contains('saturation-remove')){
      Caman('#canvas',img,function(){
        this.saturation(-30).render();
      });
    } else if (e.target.classList.contains('vibrance-add')){
      Caman('#canvas',img,function(){
        this.vibrance(100).render();
      });
    } else if (e.target.classList.contains('vibrance-remove')){
      Caman('#canvas',img,function(){
        this.vibrance(-100).render();
      });
    } else if (e.target.classList.contains('vintage-add')){
      Caman('#canvas',img,function(){
        this.vintage().render();
      });
    } else if (e.target.classList.contains('lomo-add')){
      Caman('#canvas',img,function(){
        this.lomo().render();
      });
    } else if (e.target.classList.contains('clarity-add')){
      Caman('#canvas',img,function(){
        this.clarity().render();
      });
    } else if (e.target.classList.contains('sincity-add')){
      Caman('#canvas',img,function(){
        this.sinCity().render();
      });
    } else if (e.target.classList.contains('crossprocess-add')){
      Caman('#canvas',img,function(){
        this.crossProcess().render();
      });
    } else if (e.target.classList.contains('pinhole-add')){
      Caman('#canvas',img,function(){
        this.pinhole().render();
      });
    } else if (e.target.classList.contains('nostalgia-add')){
      Caman('#canvas',img,function(){
        this.nostalgia().render();
      });
    } else if (e.target.classList.contains('hermajesty-add')){
      Caman('#canvas',img,function(){
        this.herMajesty().render();
      });
    }
  } 
});

// REMOVE Filter effects
revertBtn.addEventListener('click',()=>{
  Caman('#canvas',img,function(){
    this.revert();
  });
});

// UPLOAD Files
uploadFile.addEventListener('change', e => {
  // Get File Note: Need to create an array [Files]
  const file = document.getElementById('upload-file').files[0];

  // Init FileReader
  const reader = new FileReader();

  if(file) {
    // Set file name
    fileName = file.name;

    // Read data as URL
    reader.readAsDataURL(file);
  }
    
  const sStr ="File name = " + fileName;
  document.addEventListener('click',console.log(sStr));

  // // Get file extention Note .slice() takes charachters of the end of a string
  // const fileExtension = fileName.substring(fileName.length-4,fileName.length);

  // // Initialize a new file name variable
  // let newFileName;
  
  // // Check image type
  // if(fileExtension === '.JPG' || fileExtension === '.PNG'){
  
  //   newFileName=fileName.substring(fileName.length-4,filename.length-4)+'-edited.jpg';
  // }

  // const downldFile = newFileName;
  // const sNewStr ="New File Name = " + newFileName;
  // document.addEventListener('change',console.log(sNewStr));


  // Add Image to canvas
  reader.addEventListener('load', () => {
    // Create img
    img = new Image();
    // Set src
    img.src = reader.result;
    // ON Image load
    img.onload = function(){
      canvas.width = img.width;
      canvas.height = img.height;
      // Place the image on the canvase. Start drawImage vertical, horizontal, width, height
      ctx.drawImage(img,0,0,img.width, img.height);
      canvas.removeAttribute('data-caman-id');
    };
    
  }, false);

});


// Download Button
downloadBtn.addEventListener('click',(e) => {

    // Get file extention Note .slice() takes charachters of the end of a string
    const fileExtension = fileName.substring(fileName.length-4,fileName.length);

    // Initialize a new file name variable
    let newFileName;
    
    // Check image type
    if(fileExtension === '.JPG' || fileExtension === '.PNG'){
    
      newFileName=fileName.substring(fileName.length-4,filename.length-4)+'-edited.JPG';
    }
  
    const downldFile = newFileName;
    const sNewStr ="New File Name = " + newFileName;
    console.log(sNewStr);

  // Call Download
  download(canvas, newFileName);
});



// Download function
function download(canvas, filename_download){

  // Init event
  let e;

  // Create link
  const link = document.createElement('a');

  // const sNewStr ="filename download = " + filename_download;
  // console.log(sNewStr);
  // sURL = canvas.toDataURL('image/png', 0.8);
  // console.log("href =" + sURL);

  // Set props
  link.href = canvas.toDataURL('image/png', 0.8);
  link.download= filename_download;
  
  // New Mouse event
  e = new MouseEvent('click');

  // Dispatch Event
  link.dispatchEvent(e);

}

