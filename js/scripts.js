

function getTriangleArea(a, h){

	var x = a*h/2

	if ((a > 0) && (h > 0)) {

	return x
	
	} else {
		alert('Nieprawidłowe dane');
	}
	return x
}


console.log( getTriangleArea(10,20) );

//po czo te zaminne?
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(11, 8);
var triangle3Area = getTriangleArea(11, 15);