function ipToInt32(ip){
  let nums = ip.split(".").map( num => parseInt(num) );

  let binary = nums.map( num => {
    let binaryNum = num.toString(2);

    while (binaryNum.length < 8) {
      binaryNum = "0" + binaryNum;
    }

    return binaryNum;
  }).join("");

  return parseInt(binary, 2);
}

function ipToInt32(ip){
   return ip.split(".").reduce(function(int,v){ return int*256 + +v } );
}

function ipToInt32(ip){
    ip = ip.split('.');
    return  ((ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + (ip[3] << 0))>>>0;
}

//
// console.log(binary);
// console.log(parseInt(binary, 2));

// ipToInt32("128.32.10.1");
// parseInt("1000000010000010101", 2)
ipToInt32("128.32.10.1") //=> 2149583361

Number(5).toString(2);
// parseInt("10000000001000000000101000000001", 2).toString(10)
