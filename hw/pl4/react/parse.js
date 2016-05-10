//Varun Ved
//decent parser.js

function match(lookahead,curr)
{
    if (curr === lookahead)
    {
        
        //todo
    }
    else
    {
        console.log("error in match");
    }
}

function expr(curr)
{
    if(isNaN(curr) || curr === '(' || curr === '+' 
            || curr === '-')
    {
        f(curr);
        term(curr);
        g(curr);
    }

    else
    {
        console.log("error in expr");
    }
}

function f(curr)
{
    if(curr === '+' || curr === '-')
    {
        addOp(curr);
    }
}

function g(curr)
{
    if(curr === '+' || curr === '-')
    {
        factor(curr);
        h(curr);
    }
    /*
    else
    {
        console.log("error in g");
    }
    */

}

function term(curr)
{
    if(isNaN(curr) || curr === '(')
    {
        factor(curr);
        h(curr);
    }
    else
    {
        console.log("error in term");
    }
}

function h(curr)
{
    if(curr === '*' || curr === '/')
    {
        mulOp(curr);
        factor(curr);
        h(curr);
    }
}

function factor(curr)
{
    if(isNaN(curr))
    {
        number(curr);
    }
    else if(curr === '(')
    {
        match('(',curr);
        expr(curr);
        match(')',curr);

    }
    else
    {
        console.log("error in factor");
    }
}

function addOp(curr)
{
    if(curr === '+')
    {
        match('+',curr);
    }
    if(curr === '-')
    {
        match('-',curr);
    }
    else
    {
        console.log("error in addop");
    }

}

function mulOp(curr)
{
    if(curr === '*')
    {
        match('*',curr);
    }
    if(curr === '/')
    {
        match('/',curr);
    }
    else
    {
        console.log("error in mul");
    }

}

function number(curr)
{
    if(isNaN(curr))
    {
        digit(curr);
        i(curr);
    }
}

function i(curr)
{
    if(isNaN(curr))
    {
        digit(curr);
        i(curr);
    }
}


function digit(curr)
{
    switch(curr)
    {
        case '0':
            match('0', curr);
            break;
        case '1':
            match('1', curr);
            break;
        case '2':
            match('2', curr);
            break;
        case '3':
            match('3', curr);
            break;
        case '$':
            console.log("$ found");
            break;
        default:
            console.log("error in digit");
            break;
    }
}

function run(curr)
{

    expr(curr);
}
var a = ['2','*','2'];

a.forEach(run);
