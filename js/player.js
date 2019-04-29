    function Player(game){
        this.game=game;
        
        // 可是区域的宽高
        this.x=this.game.curW/2-65;
        this.y=this.game.curH-65-10;  
    }
    Player.prototype.update=function(){
        
    }
    Player.prototype.render=function(){
        // 弧度                         
        this.hudu = -(Math.atan2(this.game.ImX-this.game.offx,this.game.ImY-this.game.offy)+180*Math.PI/180);
        this.game.ctx.save();
        this.game.ctx.translate(this.x,this.y);
        this.game.ctx.rotate(this.hudu);
        this.game.ctx.drawImage(this.game.R.gun, 0, 0, 64, 64, -32, -32, 65, 64);
        this.game.ctx.restore();

        // console.log(Math.ceil(Math.sin(this.hudu)*24));   
    }