
function Fish(name) {
    this.name=name;
    // 在画布上的位置X,Y
    this.x = 512;
    this.y = Math.random() *384;
    // 步数0.1.2.3.4
    this.step = 0;

    this.name.fisharr.push(this);
}
Fish.prototype.update=function(){
    if(this.name.f % 4 == 0){
        this.x-=10;
        this.step++;
        if(this.step>3) this.step=0;
    }
}
Fish.prototype.render=function(){
    this.name.ctx.drawImage(this.name.R.xcy, 0, this.step*50, 66, 50, this.x, this.y, 33, 25);
    
}
Fish.prototype.zhonglei=function(){
    this.name.ctx.drawImage(this.name.R.sy, 0, this.step*52, 133, 52, this.x+100, this.y, 65, 25.5);
}


