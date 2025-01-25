
let boared = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9"
]

let turn = 'X';
let gameover = false;

let items = document.querySelectorAll(".box");
for (let item of items)
{
    item.addEventListener('click', function(){
        
        if (gameover)
            return;
        let index  = item.getAttribute('value');
        if (boared[index] == 'X' || boared[index] == 'O')
            return ;
        item.innerHTML = turn;
        boared[index] = turn;

        if (
            (boared[0] == boared[1] && boared[1] == boared[2]) || 
            (boared[3] == boared[4] && boared[4] == boared[5]) || 
            (boared[6] == boared[7] && boared[7] == boared[8]) || 

            (boared[0] == boared[3] && boared[3] == boared[6]) || 
            (boared[1] == boared[4] && boared[4] == boared[7]) || 
            (boared[2] == boared[5] && boared[5] == boared[8]) ||

            (boared[0] == boared[4] && boared[4] == boared[8]) || 
            (boared[2] == boared[4] && boared[4] == boared[6])
            )
        {
            gameover = true;
            // win pop up
            document.querySelector(".header-content").innerText = `${turn} Won`;
            return ;
        }
        let isdraw = true;
        for (let a of boared)
        {
            if (a != 'X' && a != 'O')
                isdraw = false;
        }

        
        turn = turn == 'X' ? 'O' : 'X';
        document.querySelector(".header-content").innerText = `${turn}'s turn`;
        if (isdraw)
            document.querySelector(".header-content").innerText = "it's a draw";

    });


    document.querySelector('.btn').addEventListener('click', function(){
        
        boared = [
            "1", "2", "3",
            "4", "5", "6",
            "7", "8", "9"
        ]
        for (let item of items)
            item.innerText="";
        turn = 'X';
        document.querySelector(".header-content").innerText = `${turn}'s turn`;
        gameover = false;

    });
}
