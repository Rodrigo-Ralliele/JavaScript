function tabuada() {
    let num = document.getElementById ('txtn')
    let tab = document.getElementById('seltab')
    
 if (num.value.length == 0) {
    window.alert('[ERRO] DIGITE UM NUMERO')
 } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while (c<=10) {
        let item =  document.createElement('Option')
        item.text = `${n} x ${c} == ${n*c}`
        item.value = `tab${item}`
        tab.appendChild(item)
        
        c++
      
    }
 }
}
