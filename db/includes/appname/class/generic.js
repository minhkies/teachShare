class Generic {
  constructor(){
    this.success = null;
    this.error = null;
  }
  
  set successf(f){
    if(typeof f === "function"){
      this.success = f;
    }
  }
  
  set errorf(f){
    if(typeof f === "function"){
      this.success = f;
    }
  }
  
  get gsuccess(){
    return this.success;
  }
  
  get gerror(){
    return this.error;
  }
}

module.exports = Generic;