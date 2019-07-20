



function $(id){
	return document.getElementById(id);
}

/***************************************************************
 * 参数：nd:节点（node）
 * jQcss样式赋值：
 * 1.返回元素的 CSS 属性值： $d(selector).css(name)    调用：var pp=ncs(ss).cS1("position")
 * 2.设置颜色为红色  $d("p").css("color","red");		调用：ncs(node).cS("position","absolute")
 * 3.设置多个属性 css("propertyname":"value","propertyname":"value",...);  调用：ncs(ss).cS3({*//*position:"absolute",width:"100px",height:"300px"});
 * eg:$d("p").css("background-color":"yellow","font-size":"200%");
 * 4.将当前的样式+赋值数字+"px"赋值给当前节点仅限于
 * 注意：由于函数重载排异只能用不同的函数名
 ************************************************/
function ncs(nd){
	return{
		cS1: function(prpty){
			return nd.style[prpty];
		},
		cS:function(proty,val){
				nd.style[proty]=val;
		},
		cS3:function(){
			var para=arguments[0];
				for (var p in para) {
                    nd.style[p] = para[p];
           		}
		},
		csOwn:function(proty,val){
				nd.style[proty]=parseFloat(nd.style[proty])+val+"px";
		}
	}
}

function ncr(Nd){
	return{
		cS3:function(){
			var para=arguments[0];
				for (var p in para) {
                    Nd[p] = para[p];
           	}
		},
		cS:function(proty,val){
			Nd[proty]=val;
		}
	}
}


/***************************************
 * 删除节点：通过传参当前节点，删除当前节点
 * 注意：当前节点在函数调用之前，必须判断是否存在
 ***************************************/
function delNd(nd){
	nd.parentNode.removeChild(nd);
}

