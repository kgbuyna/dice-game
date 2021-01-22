var n, i, j, l , m, tuluv = 0; 
for(i=3; i<=10; i=i+2)
{
    if(tuluv === 1)
    break;
    for(j=2; j<=i/2; j++)
    if(i % j === 0){
    break;
    tuluv = 1;
    }
    else
    console.log(i);    
}



