function Game(){
    this.canvas=document.getElementById("canvas");
    this.ctx=this.canvas.getContext('2d');
    console.log(this.ctx);
     this.R={
        "cannon1":"cannon1.png",
        "cannon2":"cannon2.png",
        "cannon3":"cannon3.png",
        "cannon4":"cannon4.png",
        "cannon5":"cannon5.png",
        "cannon6":"cannon6.png",
        "cannon7":"cannon7.png",
        "xcy":"xcy.png",
        "sy":"sy.png",
        "wgy":"wgy.png",
        "sy":"sy.png",
        "sy1":"sy1.png",
        "ht":"ht.png",
        "wgy":"wgy.png",
        "fish-hd":"fish-hd.png",
        "bullet1":"bullet1.png"
    }
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
            }
        }
    }(k))
}
}
Game.prototype.start=function() {
    var self=this;
    // 定时器
    this.f=0;
    this.fisharr = []
     new Fish(this);
    this.Play=new Play(this);
    this.Zidan=new Zidan(this);
    setInterval(function () {
        // 清除画布
        self.ctx.clearRect(0, 0, 512, 384);
        self.f++;
        // 累加器++
        self.Zidan.update();
        self.Zidan.render();

        if(self.f % 10 == 0){
            new Fish(self);
        }
        
        for(var i = 0 ; i < self.fisharr.length ; i++){
            self.fisharr[i].update();
            self.fisharr[i].render();
            self.fisharr[i].zhonglei();
        }
           
            self.Play.update();
        
         
        self.Play.render();
    }, 30)
}



