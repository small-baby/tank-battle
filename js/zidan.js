function Zidan(name){
    this.name=name;
    this.x=225;
    this.y=280;
    this.dix=5
}
Zidan.prototype.update=function(){
    this.y-=this.dix;

    if(this.x>512-24||this.x<24){
        this.dix=-this.dix
    }
    if(this.y<0){
        this.y=344
    }

}
Zidan.prototype.render=function(){
    this.name.ctx.drawImage(this.name.R.bullet1, 0, 0, 24, 26,this.x, this.y, 12, 13);
}