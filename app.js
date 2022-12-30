let imgObject = [
    "img19.jpg",
    "img11.png",
    "img20.jpeg",
  ];
  
  let mainImg = 0;
  let prevImg = imgObject.length - 1;
  let nextImg = 1;
  
  function loadGallery() {
  
    let mainView = document.getElementById("mainView");
    mainView.style.background = "url(" + imgObject[mainImg] + ")";
    mainView.style.backgroundSize = "cover" ;
    mainView.style.backgroundPosition ="center"
  
    let leftView = document.getElementById("leftView");
    leftView.style.background = "url(" + imgObject[prevImg] + ")";
    leftView.style.backgroundSize = "cover" ;
    leftView.style.backgroundPosition ="center"
    
    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgObject[nextImg] + ")";
    rightView.style.backgroundSize = "cover" ;
    rightView.style.backgroundPosition ="center"
  
  };
  
    setInterval(() => {
           prevImg = mainImg;
           mainImg = nextImg;
    if (nextImg >= (imgObject.length -1)) {
      nextImg = 0;
    } else {
      nextImg++;
    }; 
    loadGallery();
      }, 2000);