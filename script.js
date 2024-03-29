    const newBlock = document.createElement("div");
    newBlock.id = "new_Block";
    newBlock.style.display = "flex";
    newBlock.style.justifyContent = "center";
    document.body.prepend(newBlock)


    function getOneBlock(i, color) {
    const oneBlock = document.createElement("div");
    oneBlock.innerText = i;
    oneBlock.className = "one_Block";
    oneBlock.style.height = "50px";
    oneBlock.style.width = "50px";
    oneBlock.style.border = "1px solid black";
    oneBlock.style.backgroundColor = color;
    newBlock.append(oneBlock)
}


     let runBlocks;
    movingBlock = (i) => {
        runBlocks = setTimeout(() => {
            const Num = document.querySelector(".new_input").value;
            if(i <= Num){
                console.log(i);
                movingBlock(i + 1);
                const color = randomColor()
                getOneBlock(i, color);
            }
            else {
                console.log(i);
            }
        }, 100);
    }


    function pauseBlocks() {
        clearInterval(runBlocks)
    }

    function resetBlocks() {
        newBlock.innerText = "";
        pauseBlocks()
    }
    function randomColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        return "rgb(" + x + "," + y + "," + z + ")";
    }

    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "enter your favorite number";
    input.className = "new_input";
    newBlock.before(input)
    input.addEventListener("focus",() =>{
        console.log("focus");
    })

    const button1 = document.createElement("button");
    button1.innerText = "Click me";
    button1.className = "new_button";
    button1.style.height = "50px";
    button1.style.width = "50px";
    button1.style.backgroundColor = "#ff0";
    button1.style.borderRadius = "25px";
    button1.style.color = "red";
    newBlock.before(button1)
    button1.addEventListener("click", function () {
        movingBlock(1)
    });
    button1.addEventListener("click", function () {
       console.log("start");
    });

    const button2 = document.createElement("button");
    button2.innerText = "Pause me";
    button2.className = "new_butt";
    button2.style.height = "50px";
    button2.style.width = "50px";
    button2.style.backgroundColor = "#ff0";
    button2.style.borderRadius = "25px";
    button2.style.color = "green";
    newBlock.before(button2)
    // button2.addEventListener("click", pauseBlocks)
    button2.addEventListener("click", function () {
        pauseBlocks()
    });

    const button3 = document.createElement("button");
    button3.innerText = "Reset me";
    button3.className = "new_but";
    button3.style.height = "50px";
    button3.style.width = "50px";
    button3.style.backgroundColor = "#ff0";
    button3.style.borderRadius = "25px";
    button3.style.color = "black";
    newBlock.before(button3)
    button3.addEventListener("click", resetBlocks)