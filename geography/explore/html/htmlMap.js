
function changemap(newUrl) {
newMap = "exp5_" + newUrl + ".html";
top.Main.frames[8].location.replace(newMap);

newBot = "exp6_" + newUrl + ".html";
top.Main.frames[9].location.replace(newBot);
		
//alert(top.Main.frames[5].name);

	switch(newUrl){
	case'1': top.Main.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'3': top.Main.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'4': top.Main.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'5': top.Main.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'6': top.Main.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'7': top.Main.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	case'8': top.Main.frames[5].document.images['titletext'].src = "images/ui/titletext_" + newUrl + ".gif" ;
	}
	
}

