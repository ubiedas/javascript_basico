/* IF 
 IF / ELSE 
 IF / ELSE IF / ELSE
 */

 let llueve = false
 let loQueVoyAHacer = ""
 if (llueve) {
     document.getElementById("js_1").innerText = "Necesito un paraguas"
 } else {
    document.getElementById("js_1").innerText = "Me voy de paseo"
 }

 document.getElementById("js_1").innerText = loQueVoyAHacer 

 let dia_semana = "martes"
let mensaje = ""

 if (dia_semana == "lunes"){
    mensaje = "Hoy es lunes"
 } else if (dia_semana == "martes") {
    mensaje = `Hoy es ${dia_semana}`
 } else { 
    mensaje = "Hoy no es ni lunes ni martes"
 }

 document.getElementById("js_1").innerText = mensaje