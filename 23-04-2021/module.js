function timedate()
{
    const dateObj = new Date();
		    var month = dateObj.getMonth();
		    const day = String(dateObj.getDate()).padStart(2,'0');
		    const year = dateObj.getFullYear();
        var time=dateObj.getHours()+":"+dateObj.getMinutes()+":"+dateObj.getSeconds()+".";
		    month=month+1;
		    var output;
		    if(month>9)
		       output =  year+'-'+month+'-'+day;
		    else
		       output =  year+'-'+0+month+'-'+day;
		  return {output,time};
}
module.exports=timedate;