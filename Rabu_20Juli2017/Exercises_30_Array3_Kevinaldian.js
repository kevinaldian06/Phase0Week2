var input = ["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", 
             "21/05/1989", "Membaca"];

function dataHandling2(input) {
    var x=input.splice(4, 1, "Pria", "SMA Internasional Metro");   
    console.log(input);

    var monthNames = ["", "Januari", "Februari", "Maret", 
                      "April", "Mei",];
  	var a = input[3].split("/").map(Number)
  	var b = a[1];
  	console.log(monthNames[b]);

    console.log(input[3].split("/").map(Number).sort(function(value1, value2) { return value1 < value2 }));
    
    console.log(input[3].split("/").join("-"));

    console.log(input[1].slice(0,14));
}

    console.log(dataHandling2(input));