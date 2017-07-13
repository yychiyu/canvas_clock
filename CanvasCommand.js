 var CanvasCommand = (function(){
            var canvas = document.getElementById('canvas');
            ctx = canvas.getContext('2d');
            var Action = {
                fillStyle:function(c){
                    ctx.fillStyle = c;
                },
                fillRect:function(x,y,width,height){
                    ctx.fillRect(x,y,width,height);
                },
                strokeStyle:function(c){
                    ctx.strokeStyle = c;
                },
                strokeRect:function(x,y,width,height){
                   ctx.strokeRect(x,y,width,height);
                },
                fillText:function(text,x,y){
                    ctx.fillText(text,x,y);
                },
                lineWidth:function(c){
                    ctx.lineWidth = c;
                },
                beginPath:function(){
                    ctx.beginPath();
                },
                moveTo:function(x,y){
                    ctx.moveTo(x,y);
                },
                lineTo:function(x,y){
                    ctx.lineTo(x,y);
                },
                arc:function(x,y,r,begin,end,dir){
                    ctx.arc(x,y,r,begin,end,dir);
                },
                fill:function(){
                    ctx.fill();
                },
                stroke:function(){
                    ctx.stroke();
                }
            }
            return {
                execute:function(msg){
                    if(!msg) return;
                    //如果命令是一个数组
                    if(msg.length){
                        for (var i = 0; i < msg.length; i++) {
                           arguments.callee(msg[i]);
                        }
                    }
                        else{
                            msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param:[msg.param];
                            Action[msg.command].apply(Action,msg.param);

                        }
                    
                }
            }
        })(); 