function contar(){
    var i = document.getElementById ('inicio')
    var p = document.getElementById ('passo')
    var f = document.getElementById ('fim')
    var rs = document.getElementById ('res') 
    var ni = Number(i.value)
    var np= Number(f.value)
    var nf= Number(f.value)

    let startNumber = ni;
    let endNumber = startNumber + nf;
    let countArray = [];

    for (let ni = startNumber; ni < endNumber; ni++){
        countArray.push(ni)
    }
    rs.innerText = countArray.join(",")
    
}