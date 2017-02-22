/**
 * Created by amarpreet on 20/02/17.
 */
var mod = function () {
   function start(key) {
        var nameList =h();
        var marksList = e();
        return iJoin(nameList,marksList,key);;
    }
    function iJoin(t1,t2,key){
        var temp1 = getKeyValues(t1,key); //[1,2,3]
        var temp2 = getKeyValues(t2,key); //[1,2]
        var matchedValues = getMatchingValues(temp1,temp2) || []; //[1,2]
        return check(matchedValues) ? generateResult(t1,t2,key,matchedValues) : noMatchFound();
    }
    function getMatchingValues(t1,t2){
        t1=t1||[];
        t2=t2||[];
        return t1.filter((val)=>{
                if(t2.indexOf(val)!=-1){
                    return val;
                }
    });
    }
    function check(arr){
        return arr.length ? true : false;
    }
    function noMatchFound(){
        return new Array();
    }

    function generateResult(t1,t2,key,matchedValues){
        let temp  = new Array();
        for(let i=0 ; i<matchedValues.length;i++){
            let m1=compare(t1,key,matchedValues[i]);
            let m2=compare(t2,key,matchedValues[i]);
            let r = new Map([...m1,...m2]);
            temp.push(r);
        }
        return temp;
    }

    function compare(arr,key,val) {
        for(let i=0;i<arr.length;i++){
            if(arr[i].get(key) == val){
                return arr[i];
            }
        }
    }
    function h() {
        var temp=[];
        for(var i=0;i<1000;i++){
            var m=new Map();
            m.set('id',i); m.set('name','a'+ i);
            temp.push(m)
        };
        return temp;
    }
    function e() {
        var temp=[];
        for(var i=0;i<500;i++){
            var m=new Map();
            m.set('id',i); m.set('marks',i*50);
            temp.push(m)
        };
        return temp;
    }

    function getKeyValues(t,key) {
        return t.map((elm)=>{
                if(elm.has(key)){
            return elm.get(key);
        }
    });
    }

    return{
        start:start
    }
};


var temp=mod().start('id');

