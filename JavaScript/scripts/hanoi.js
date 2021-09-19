function setUpArrays(n) {
  let source = new Array(n)
    , auxiliary = new Array(n)
    , destination = new Array(n);
    
    for (let item of source) item = {};
}


function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
        if (n == 1)
        {
            document.write("Move disk 1 from rod " + from_rod +
            " to rod " + to_rod+"<br/>");
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        document.write("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod+"<br/>");
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }