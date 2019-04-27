function Play(name){
    this.name=name;
    this.step=0;
}
Play.prototype.update=function(){
    this.step++;
    if(this.step>4)this.step=0
}
Play.prototype.render=function(){ this.name.ctx.drawImage(this.name.R.cannon1, 0, this.step*75, 74, 60.2,213, 350, 37, 30.1);
}