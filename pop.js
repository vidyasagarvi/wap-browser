var newwindow;
function poptastic(url)
{
	newwindow=window.open(url,'name','height=400,width=300,scrollbars=yes,status=yes');
	if (window.focus) {newwindow.focus()}
}