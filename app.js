(function(){    
let refs=document.querySelectorAll('[data-to-bind]');
let scope={};
refs.forEach(function(ref){
    if(ref.type=="text" || ref.type=="number"){
       let propName=ref.getAttribute("data-to-bind");
       setProperty(propName,ref);
       ref.onkeyup=function(){
           scope[propName]=ref.value;
       }
    }
})
function setProperty(propName,ref){
if(!scope.hasOwnProperty(propName)){
    let value;
    Object.defineProperty(scope,propName,{
        enumerable:true,
        get:function(){
            return value;
        },
        set:function(newValue){
            value=newValue;
            refs.forEach(function(ref){
                if(ref.getAttribute("data-to-bind")===propName){
                    if(ref.type && (ref.type=="text" || ref.type=="number")){
                        ref.value=value;
                    }else{
                        ref.innerHTML=value;    
                    }
                }                
            })
        }        
    })
}
}
})();