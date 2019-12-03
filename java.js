for (count = 0; count <= 1000; count++){
    for (i = 1; i <= 12; i++){
        function diceRoll(min, max) {
            min = Math.ceil(2);
            max = Math.floor(12);
            let o = 0;
            o = Math.floor(Math.random () * 12) + 2;
            
            document.getElementById("table2").innerHTML = count[o] +1;
            
            let newElement = document.createElement("div");
            newElement.className = "graph";
            newElement.style.width = o * 100 + "px";
           
            let label = document.createTextNode("Die roll" + o);
            newElement.appendChild(label);
          
            let destination = document.getElementById("graph");
            destination.appendChild(newElement);
            }
        }
        console.log(diceRoll())
}