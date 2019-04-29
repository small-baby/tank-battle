    function Game(){
        this.canvas=document.getElementById("canvas");
        this.ctx=this.canvas.getContext('2d');
        this.curW = document.documentElement.clientWidth || document.body.clientWidth;
        this.curH = document.documentElement.clientHeight || document.body.clientHeight;    
        this.offx=this.canvas.offsetWidth/2;
        this.offy=this.canvas.offsetHeight-70;    
        // this.hudu = -(Math.atan2(this.game.ImX-this.game.offx,this.game.ImY-this.game.offy)+180*Math.PI/180);    
        this.R={
            "fish1":"fish1.png",
            "fish2":"fish2.png",
            "fish3":"fish3.png",
            "fish4":"fish4.png",
            "fish5":"fish5.png",
            "fish6":"fish6.png",
            "fish7":"fish7.png",
            "fish8":"fish8.png",
            "fish9":"fish9.png",
            "fish10":"fish10.png",
            "gun":"gun.png",
            "zidan":"zidan.png",

        }
        this.canvas.width=this.curW;
        this.canvas.height=this.curH; 
    var self=this;
    // 获取到这个对象的长度
    var imageAmout = Object.keys(this.R).length;
    // 累加器
    var count = 0;
    // 遍历每一个k
    for (var k in this.R) {
        // IIFE        
        (function (k) {
            // 创建一个新的image
            var img = new Image();        
            // 设置他的图片格式
            img.src = "./image/" + self.R[k];
            img.onload = function () {
                // 将图片写入R[K]中
                count++;
                self.R[k] = img;
                // 累加器加加
                // 如果累加器的数量等于所有图片的数量
                if (count == imageAmout) {
                    // 开始
                    self.start();   
                    // 事件监听
                    self.bindEvent();
                }
            }
        }(k))
    }
    }
    Game.prototype.start=function(){
        var self=this;
        self.f=0;
        this.fisharr = [];
        this.zidanarr= [];
        console.log(this.fisharr);
        this.player=new Player(this);
        // new Fish(this);
        // new Zidan(this);
        setInterval(function(){
            self.ctx.clearRect(0, 0, self.curW, self.curW);
            self.f++;
            self.ctx.fillStyle = "white";
            self.ctx.fillText(self.f, 10, 20);
            self.player.render();
            self.player.update();
            if(self.f % 30 == 0){
                new Fish(self);
            }
            if(self.f % 30 == 0){
                new Zidan(self, self.player.hudu);
            }
            // 遍历每一个鱼数组
            for(var i = 0 ; i < self.fisharr.length ; i++){
                self.fisharr[i].update();
                // 渲染鱼
                self.fisharr[i].render();
                // console.log(self.zidanarr);
                
                self.fisharr[i].zhonglei();
                self.fisharr[i].zhonglei1();
                self.fisharr[i].zhonglei2();
                self.fisharr[i].zhonglei3();
            }
            // 遍历每一个子弹数组
            for(var i = 0 ; i < self.zidanarr.length ; i++){
                self.zidanarr[i].update();
                // 渲染子弹数组 
                self.zidanarr[i].render();
                // self.fisharr[i].sidiao();
            }
        }, 60);
    }
    //************************************ */
    Game.prototype.bindEvent = function(){
        // 备份this
        var self = this;
        // 鼠标移动
        document.onmousemove = function(e){
            
            // console.log(self.Imx=e.layerX);
            self.ImX=e.layerX
            self.ImY=e.layerY
        }
    }