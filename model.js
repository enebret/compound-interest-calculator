var p, i, n;
p = 10000
i = 5
n = 1 //number of compounding periods

function nio(x){
    return x/100
}

//compound interest(cit) = p[(1 + i)ⁿ - 1]
var cp = function(){
    let bk, ck, lk;
    bk = 1 + nio(5)
    ck = bk ** n
    lk = ck - 1
    return p * lk.toFixed(2)
    
}

cp()