var arr = prompt('请输入数字:');
var n = arr.length;
for(var i=0; i<n; i++) {
	if(arr[i] == 1 || arr[i] == 4) {
		document.write('...&nbsp;&nbsp;&nbsp;');
	} else {
		document.write('._.&nbsp;&nbsp;&nbsp;');
	}
}
document.write('<br>');
for(var j=0; j<n; j++) {
	if(arr[j] == 0) {
		document.write('|.|&nbsp;&nbsp;&nbsp;');
	} else if(arr[j] == 1 || arr[j] == 7) {
		document.write('..|&nbsp;&nbsp;&nbsp;');
	} else if(arr[j] == 2 || arr[j] == 3) {
		document.write('._|&nbsp;&nbsp;&nbsp;');
	} else if(arr[j] == 4 || arr[j] == 8 || arr[j] == 9) {
		document.write('|_|&nbsp;&nbsp;&nbsp;');
	} else {
		document.write('|_.&nbsp;&nbsp;&nbsp;');
	}
}
document.write('<br>');
for(var k=0; k<n; k++) {
	if(arr[k] == 0 || arr[k] == 6 || arr[k] == 8) {
		document.write('|_|&nbsp;&nbsp;&nbsp;');
	} else if(arr[k] == 2) {
		document.write('|_.&nbsp;&nbsp;&nbsp;');
	} else if(arr[k] == 3 || arr[k] == 5) {
		document.write('._|&nbsp;&nbsp;&nbsp;');
	} else {
		document.write('..|&nbsp;&nbsp;&nbsp;');
	}
}
