var n = 0;
onmessage = function(e) {
  var data = e.data;
  n = parseInt(data);
  incPrime();
  
};
function incPrime() {
  var isPrime = 1;
  n=n+1;
  for(i = 2; i <= n - 1; i++) 
      if (n % i == 0) { 
        isPrime = 0;
        break;
      }    
  postMessage({num:n,flag:isPrime}); 
  
  setTimeout("incPrime()",1000);
}


