 $(function () { 
        var im=0;
       function add(){
         for(var i=1;i < 40;i++){
                var box= '<div class="box"><div class="pic"><img/></div></div>';
				$("#gallery").append(box);
				$("img").eq(im).attr("src",function(){
					var ims = "image/";
					var jpg = ".jpg";
					var oSrc = ims + i +jpg;
					return oSrc;
				});
				im++;
         }
			$("#gallery").height(function(){
				var height = $(document).height() - 300;
				var h = height + 'px';
				return h;
			});
	        var wid = Math.floor($(document).width());
	   $(".area").width(function(){
	            var w = wid + 'px';
				return w;
	    });
		}
 //基本结构部分结束
       function waterfall(){
			var oGallery = document.getElementById('gallery');
			var oBox = getByClass(oGallery);
			var oBoxW = oBox[0].offsetWidth;
			var cols = Math.floor(document.body.clientWidth/oBoxW)-1;
			var hArr = new Array();
			for(var i = 0;i<oBox.length;i++){
				if(i<cols){
				hArr.push(oBox[i].offsetHeight);
				}else{
					var minH = Math.min.apply(null,hArr);
					var index = getMinHindex(hArr,minH);
					minH=minH+200;
					oBox[i].style.position = 'absolute';
					oBox[i].style.top = minH + 'px';
					oBox[i].style.left = oBox[index].offsetLeft +'px';
					hArr[index] += oBox[i].offsetHeight;
				}
			}
		};
		function getByClass(oGallery){
			var boxArr = new Array();
	        var oElements = oGallery.getElementsByTagName('*');
			for(var i = 0;i<oElements.length;i++){
				if(oElements[i].className == "box"){
					boxArr.push(oElements[i]);
				}
			}
			return boxArr;
		};
		function getMinHindex(arr,val){
	        for(var i in arr){
		      if(arr[i]==val){
			   return i;
		    }
	     }
      };
		   add();
		   im++;
		   if(im==40){
		    waterfall();
		   }
})
     