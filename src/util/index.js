import xss from 'xss'

/*
xss 攻击过滤
*/
export const xssfilter = function(obj){
	if(typeof obj == "string")
	{
		return xss(obj)
	}
	else if(typeof obj == "object")
	{
		for(let i in obj)
		{
			if(obj.hasOwnPorperty(i))
			{
				obj[i]=xssFilter(obj[i])
			}
		}
	}
	return obj;
}