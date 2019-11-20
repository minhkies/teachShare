function createHash(type, nlen){
  let mc = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMM',
      hash = '',
      len = (nlen) ? nlen : 10;
  
  if(type && type === 1){
    mc = '1234567890';
    len = (nlen) ? nlen : 4;
  }
  
  //create the 10 char hash
  for (var b = 0; b<len; b++){
    hash += mc[Math.round(Math.random()*(mc.length-1))];
  }
  
  return hash;
}

module.exports = createHash;