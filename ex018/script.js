function calcular() {
   let num = document.getElementById ('fnum')
   let tab = document.getElementById ('seltab')
   let n = Number(num.value)

   if (num.value.length == 0) {
      window.alert ('[ERRO] DIGITE UM NUMERO')
   } else {
      let c = 1
      while (c <=100) {
      let item = document.createElement('option')
      item.text = `Valor ${n} adcionado`
      tab.appendChild (item)
      c++
      }
   }
}