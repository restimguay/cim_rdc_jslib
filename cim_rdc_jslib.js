/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
RDCJSLib ={    
    version:'1.0',
    release:'July 5, 2014',
    modified_by:'Resti Guay',
    onload:[],
    getVersion:function(){
        return(this.version);
    },
    /**
     * Evaluate if the object is typeof Object
     * @param {type} object
     * @returns {Boolean}
     */
    isObject:function(object){
        if(typeof(object) === 'object'){
           return true;
        }
        return false;
    },
    /**
     * Evaluate if the object is typeof Boolean
     * @param {type} object
     * @returns {Boolean}
     */
    isBoolean:function(object){
        if(typeof(object) === 'boolean'){
           return true;
        }
        return false;
    },
    /**
     * Evaluate if the object is typeof String
     * @param {type} object
     * @returns {Boolean} 
     */
    isString:function(object){
        if(typeof(object) === 'string'){
           return true;
        }
        return false;
    },
    /**
     * 
     * @param {type} object
     * @returns method that validate user input
     */
    setNumberOnly:function(object){        
        if(this.isObject(object)){
           return true;
        }
        return false;
    },
    /**
     * 
     * @param {String} element id or DOM instance of an element
     * @returns method that validate user input
     */
    setDecimalOnly:function(element){
        alert(typeof(element));
    },
    /**
     * 
     * @param {Object,ID} instance/element id of the DOM element
     * @param {Boolean,String} visibility, true/'visible' = visible while false/'hidden';
     * @returns {undefined}
     */
    setVisibility : function(element,visibility){
        if(this.isBoolean(visibility) === 'boolean'){
            if(visibility===true){
                visibility = 'visible';
            }else{
                visibility = 'hidden';
            }
        }        
        if(this.isObject(element)){
            element.style.visibility = visibility;
        }else{
            document.getElementById(element).style.visibility = visibility;
        }
    },
    addToOnloadEvent:function(method){
        this.onload.push(method);
    }
};


window.onload = function(){
    //alert(RDCJSLib.getVersion());
    RDCJSLib.addToOnloadEvent(alert(RDCJSLib.isString('hello')));
    RDCJSLib.addToOnloadEvent(alert(RDCJSLib.isBoolean(true)));
    RDCJSLib.addToOnloadEvent(alert(RDCJSLib.isObject(new Object())));
    for (i = 0; i < RDCJSLib.onload.length; i++) {
        eval(RDCJSLib.onload[i]);
    }
};

