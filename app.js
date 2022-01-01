const result = document.getElementById('result');
// console.log(result);

const tableImg = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]

const tableResult =[
    [1,1,2,2],
    [3,4,4,5],
    [6,3,6,5],
    [7,8,7,8]
]

let firstClick = [];
let nbAffiche = 0;
let ready = true;

function table(){

    let text = "";

    for (let i = 0; i < tableImg.length; i++){
        text += "<div>";

        for (let j = 0; j <tableImg.length; j++){

            if (tableImg[i][j] === 0){
                text += "<button class='btn btn-primary m-2' style='width: 120px;height: 120px' onclick='check(\""+i+"-"+j+"\")'>Afficher</button>"
            }
            else{
                text += "<img alt='' src='"+img(tableImg[i][j]) + "' class='btn btn-primary m-2' style='width: 120px;height: 120px'>";
            }
        }
        text += "</div>";
    }

    result.innerHTML = text;
}
table();

function img(value){

    let imgInsert = "";

    switch(value){

        case 1 : imgInsert += "pictures/circle.jpg";
            break;
        case 2 : imgInsert += "pictures/crose.jpg";
            break;
        case 3 : imgInsert += "pictures/diamond.png";
            break;
        case 4 : imgInsert += "pictures/ovale.jpg";
            break;
        case 5 : imgInsert += "pictures/parallelogram.jpg";
            break;
        case 6 : imgInsert += "pictures/rectangle.png";
            break;
        case 7 : imgInsert += "pictures/square.png";
            break;
        case 8 : imgInsert += "pictures/triangle.jpg";
            break;

        default : alert('error')
    }
    return imgInsert;
}

function check(btnClick){
    if(ready){
        nbAffiche++;

        let row = btnClick.substr(0,1);
        let column = btnClick.substr(2,1);

        // console.log(row)
        // console.log(column)

        tableImg[row][column] = tableResult[row][column];

        table();

        if(nbAffiche > 1){
            ready = false;

            setTimeout(function (){

                if(tableImg[row][column] !== tableImg[firstClick[0]][firstClick[1]]){
                    tableImg[row][column] = 0;
                    tableImg[firstClick[0]][firstClick[1]] = 0;
                }
                table();

                ready = true;
                nbAffiche = 0;
                firstClick = [row,column];
            },550)
        }
        else{
            firstClick = [row,column];
        }
    }
}

function shuffle(tableResult)
{
    let j = 0;
    let valI = '';
    let valJ = valI;
    let l = tableResult.length - 1;
    while(l > -1)
    {
        j = Math.floor(Math.random() * l);
        valI = tableResult[l];
        valJ = tableResult[j];
        tableResult[l] = valJ;
        tableResult[j] = valI;
        l = l - 1;
    }
    return tableResult;
}

document.getElementById('start').addEventListener('click',function (){

    shuffle(tableResult);
})