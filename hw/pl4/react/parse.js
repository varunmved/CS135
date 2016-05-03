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
        console.log("error");
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
    else
    {
        console.log("error");
    }

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
        console.log("error");
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
        console.log("error");
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
        console.log("error");
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
        console.log("error");
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
        case '4':
            match('4', curr);
            break;
        case '5':
            match('5', curr);
            break;
        case '6':
            match('6', curr);
            break;
        case '7':
            match('7', curr);
            break;
        case '8':
            match('8', curr);
            break;
        case '9':
            match('9', curr);
            break;
        case '$':
            console.log("$ found");
            break;
        default:
            console.log("error in digit");
            break;
    }
}


curr = "1-2*2";
expr(curr);

