
$("#header").load("header.html");
$("#footer").load("footer.html");
addADver()    //删除
	function addADver(){
	//以下代码为删除嵌入广告
        var del_times = 0, deTimer = null;
        function adGo() {
            var iframe = document.getElementsByTagName('iframe')[0];
            if(iframe){
                console.log(iframe)
                
                //循环 iframe 父类，直到找到body和body的下一级，然后整个嵌入的代码删除。
				if(iframe.className !="html2canvas-container"){					//不让删除合成的iframe
                var bodyNode = {tagName:''}, iframeParent, targetNode = iframe.parentNode;
				if(bodyNode.tagName!=null){				//不为空才删除
//                     bodyNode = targetNode;
//                     if(bodyNode.tagName != 'BODY'){
//                         iframeParent = targetNode;
//                         targetNode = targetNode.parentNode;
//                     }
//                 
//                 if(iframeParent) //如果iframe有父类
//                     bodyNode.removeChild(iframeParent);
//                 else
//                     bodyNode.removeChild(iframe);
						console.log(bodyNode)
					$(iframe).remove();
				}
            }
		}
            del_times++;
            if (del_times > 10) window.clearInterval(deTimer)
	}

        deTimer = self.setInterval(adGo, 200);   //把这个1000, 调低一点，比如200
}
