function arabictoromanConverter(num){
  if(num*1=="NaN"){
    return "invalid string";
  }

  var roman={
  	1:"I",
  	2:[1,1],
  	3:[1,1,1],
  	4:[1,5],
  	5:"V",
  	6:[5,1],
  	7:[5,1,1],
  	8:[5,1,1,1],
  	9:[1,10],
  	10:"X",
  	50:"L",
  	100:"C",
  	500:"D",
  	1000:"M"
  };

  var digits=[];
  var dec=1;
  while(num){
     digits.push((num%10)* dec);
     dec=dec*10;
     num=Math.floor(num/10);
  }

  var romanString="";
  console.log(digits);
  dec=1;

     for(var i=0;i<digits.length;i++){
     	let currDigit=roman[digits[i]];
	   	if(typeof currDigit=="string"){
	       romanString=currDigit+romanString; 
	   	}else if(typeof currDigit=="object"){
	   		for(var j=0;j<currDigit.length;j++){
	   			romanString=romanString+roman[currDigit[j]*dec]
	   		}
	   		
	   	}else{
	   		var d=digits[i]/dec;
	   		var t=roman[d];
	   		if(t){
	   			t=t.reverse();
            for(var k=0;k<t.length;k++){
               romanString=roman[t[k]*dec]+romanString;
	   		}
	   	   }
	   	}
	   	dec=dec*10;
       }
   return romanString;

}



