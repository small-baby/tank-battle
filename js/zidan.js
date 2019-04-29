    function Zidan(game, playerHudu) {
        this.game = game;
        this.playerHudu = -playerHudu;
        this.x = parseInt(this.game.curW / 2);
        this.y = parseInt(this.game.curH - 65 - 10);
        // 子弹动态
        this.curPoy = 0;
        // this.iRatio=this.iRatio*6;
        // 返回一个子弹数组
        this.game.zidanarr.push(this);
    }
    Zidan.prototype.update = function () {
        // console.log(this.playerHudu)
        this.y -= 6;
        if ((this.playerHudu - 3) < 0) {
            this.x += (this.playerHudu - 3) * this.playerHudu * 6
        } else {
            this.x += (this.playerHudu - 3) * (6.5 - this.playerHudu) * 3
        }
        this.curPoy += 0.2;
        if (this.curPoy > 3) {
            this.curPoy = 0;
        }
        for(var i = 0; i < this.game.fisharr.length; i++){
            // console.log(this.game.fisharr[i].x,this.game.fisharr[i].y,this.x,this.y)
            if(this.x <= this.game.fisharr[i].x&& this.y <= this.game.fisharr[i].y && this.x<=80 && this.y<=80){
                // this.sidiao()
                    for (var i = 0; i < this.game.zidanarr.length; i++) {
                        if (this.game.zidanarr[i] == this) {
                            this.game.zidanarr.splice(i, 1)
                            
                        }
                    }
                    // alert(1)
                    
            }
        }

    }
    Zidan.prototype.render = function () {
        this.theX = Math.floor(24 - Math.cos(this.game.player.hudu) * 24 - 10);
        this.theY = Math.ceil(Math.sin(this.game.player.hudu) * 24);
        this.arcX = this.x + this.theX;
        this.arcY = this.y + this.theY;
        this.game.ctx.save();
        this.game.ctx.translate(this.arcX, this.arcY);
        this.game.ctx.rotate(this.game.player.hudu);
        this.game.ctx.drawImage(this.game.R.zidan, 0, parseInt(this.curPoy) * 48, 30, 48, this.theX - 60, this.theY - 80, 30, 48);
        this.game.ctx.restore();
    }
    Zidan.prototype.sidiao = function () {
    }
    console.log(this.game);