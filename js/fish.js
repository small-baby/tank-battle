    function Fish(game) {
        this.game=game;
        // 在画布上的位置X,Y
        this.x=0;
        // this.x = -~~(Math.random() *(this.game.curW)+100)-100;
        // 随机鱼的位置
        // console.log(this.x);
        
        this.y = ~~(Math.random() *(this.game.curH)+100)-100;
        // 状态0.1.2.3.4
        this.step = 0;
        // this.step1 =0
        this.game.fisharr.push(this);      
    }
    // 行为效果
    Fish.prototype.update=function(){
        if(this.game.f % 5 == 0){
            this.x+=5;
            this.step++;
            if(this.step>3) this.step=0;
        }
        for (var i = 0; i < this.game.zidanarr.length; i++) {
            if ( Math.abs(this.x-this.game.zidanarr[i].x)<50 &&Math.abs(this.y-this.game.zidanarr[i].y)<50 ) {
                this.si();
                // console.log(this.game.zidan.sidiao());
            }
        }
        // for (var i = 0; i < this.game.fisharr.length; i++) {
        //     if (this.x == this.game.fisharr[i].x && this.y == this.game.fisharr[i].y){
        //         // this.si();
        //     }
        // }
    }
    // 渲染效果
    Fish.prototype.render=function(){ 
        // 渲染小鱼
        this.game.ctx.drawImage(this.game.R.fish1, 0, this.step*37, 55, 37, this.x, this.y, 55, 37);
        // this.game.ctx.drawImage(this.game.R.fish3, 0, this.step*56, 72, 56, this.x-100, this.y, 72, 56);
        // this.game.ctx.drawImage(this.game.R.fish5, 0, this.step*122, 107, 122, this.x-450, this.y+40, 107, 122);
    }
    Fish.prototype.zhonglei=function(){
        this.game.ctx.drawImage(this.game.R.fish6, 0, this.step*79, 105, 79, this.x-230, this.y+100, 105, 79);
        // this.name.ctx.drawImage(this.name.R.wgy, 0, this.step*52, 133, 52, this.x+100, this.y, 133, 52);
    }
    Fish.prototype.zhonglei1=function(){
        this.game.ctx.drawImage(this.game.R.fish2, 0, this.step*64, 78, 64, this.x-800, this.y, 78, 64);
    }
    Fish.prototype.zhonglei2=function(){
        this.game.ctx.drawImage(this.game.R.fish7, 0, this.step*151, 92, 151, this.x-300, this.y, 92, 151);
    }
    Fish.prototype.zhonglei3=function(){
        this.game.ctx.drawImage(this.game.R.fish4, 0, this.step*59, 77, 59, this.x-150, this.y+40, 77, 59);
    }
    Fish.prototype.zhonglei3=function(){
        this.game.ctx.drawImage(this.game.R.fish10, 0, this.step*187, 178, 187, this.x-150, this.y+40, 178, 187);
    }
    Fish.prototype.si = function () {
        for (var i = 0; i < this.game.fisharr.length; i++) {
            if (this.game.fisharr[i] == this) {
                this.game.fisharr.splice(i, 1)
            }
        }
    }