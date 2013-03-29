function main(){
  
  var exports = this.Spec = {}
  #include "../vendor/spec/lib/spec.js"
  // $.write("Spec: ")
  // $.writeln(this.Spec)
  
  exports = this.Newton = {}
  #include "../vendor/spec/lib/newton.js"
  // $.write("Newton: ")
  // $.writeln(this.Newton)
  
  exports = this.JSON = {}
  #include "../lib/json3.js"
  // $.write("JSON: ")
  // $.writeln(this.JSON)
  
  try {
    #include "./test_json3.js"
  }
  catch(e) {
    $.bp()
    print(e)
    print(e.source.split('\n')[e.line-1])
    // for (var property in e) {
    //   print(property, ': ', e[property])
    // }
  }
  
}

main.call({
  load: function(identifier, path){
    return this[identifier]
  }
});
