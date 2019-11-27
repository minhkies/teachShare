const types = require("../types");

module.exports = {
  verify:async (token) => {
    var resp = false;
    
    try {
      resp = await types.jwt.verify(token, types.SECRET);
    } catch (err){
      resp = false;
    }
    
    return resp;
  },
  sign:async (d)=>{
    return await types.jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: d
    }, types.SECRET);
  }
}