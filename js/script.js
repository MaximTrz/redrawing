window.addEventListener('DOMContentLoaded', ()=>{

  const divider = document.querySelector(".divider"),
        leftBlock = document.querySelector(".imageBlock_left"),
        rightBlock = document.querySelector(".imageBlock_right"),
        wrapper = document.querySelector(".imageBox"),
        imgLeft = document.querySelector(".imageBlock_left>img");
        imgRight = document.querySelector(".imageBlock_right>img");
        
    leftBlock.style.width = wrapper.offsetWidth + divider.offsetWidth +'px';
    leftBlock.style.height = wrapper.offsetHeight + 'px';
    imgLeft.style.width = wrapper.offsetWidth + divider.offsetWidth +'px';

    rightBlock.style.width = wrapper.offsetWidth + divider.offsetWidth + 'px';
    rightBlock.style.height = wrapper.offsetHeight + 'px';
    imgRight.style.width = wrapper.offsetWidth + divider.offsetWidth + 'px';

    divider.style.left = "50%";
    leftBlock.style.width = (wrapper.offsetWidth/2) + 'px';


    

  divider.addEventListener('mousedown', (e)=>{  

    function moveAt(e) {
      let posX = e.pageX - divider.offsetWidth / 2;
      if ((posX>=0)&&(posX<=wrapper.offsetWidth)){
        divider.style.left = posX  + 'px';
        leftBlock.style.width = posX + 'px';        
      }      
    }

    wrapper.onmousemove = function(e) {
      moveAt(e);
    }

  });

  divider.addEventListener("mouseup", ()=>{
    wrapper.onmousemove = null;
    divider.onmouseup = null;
  });

});
    