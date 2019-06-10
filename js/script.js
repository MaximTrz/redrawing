window.addEventListener('DOMContentLoaded', ()=>{


redrawingImg = new redrawing({
  divider: '.divider',
  leftBlock: '.imageBlock_left',
  rightBlock: '.imageBlock_right',
  wrapper: '.imageBox',
  imgLeft: '.imageBlock_left>img',
  imgRight: '.imageBlock_right>img'
});

function redrawing(settings){
    
  this.divider = document.querySelector(settings.divider);
  this.leftBlock = document.querySelector(settings.leftBlock);
  this.rightBlock = document.querySelector(settings.rightBlock);
  this.wrapper = document.querySelector(settings.wrapper);
  this.imgLeft = document.querySelector(settings.imgLeft);
  this.imgRight = document.querySelector(settings.imgRight);

  
  this.leftBlock.style.width = this.wrapper.offsetWidth + this.divider.offsetWidth +'px';
  this.leftBlock.style.height = this.wrapper.offsetHeight + 'px';
  this.imgLeft.style.width = this.wrapper.offsetWidth + this.divider.offsetWidth +'px';

  this.rightBlock.style.width = this.wrapper.offsetWidth + this.divider.offsetWidth + 'px';
  this.rightBlock.style.height = this.wrapper.offsetHeight + 'px';
  this.imgRight.style.width = this.wrapper.offsetWidth + this.divider.offsetWidth + 'px';

  this.divider.style.left = "50%";
  this.leftBlock.style.width = (this.wrapper.offsetWidth/2) + 'px';


   this.moveAt = function moveAt(e) {
    
    let posX;

    if(e.which=="1"){
      posX = (e.pageX-this.wrapper.getBoundingClientRect().x) - this.divider.offsetWidth / 2;      
    }

    
    if(e.which=="0"){
      posX = (e.targetTouches[0].clientX-this.wrapper.getBoundingClientRect().x) - this.divider.offsetWidth / 2;      
    };
    
    if ((posX>=0)&&(posX<=this.wrapper.offsetWidth)){
      this.divider.style.left = posX  + 'px';
      this.leftBlock.style.width = posX + 'px';
      this.leftBlock.style.width = posX + 'px';  
    }
    
  }



  this.divider.addEventListener('mousedown', (e)=>{
      this.wrapper.onmousemove = (e)=> {
        this.moveAt(e);        
      }      
  });



  this.divider.addEventListener("touchstart", (e)=>{
    this.moveAt(e);    
  });

  this.divider.addEventListener("mouseup", ()=>{
    
    this.wrapper.onmousemove = null;
    this.divider.onmouseup = null;
    
  });
    
  this.wrapper.onmousedown = function(){    
    return false;
  };

} 




});

