// Global Variables
const PALETTE = [
    'red',
    'coral',
    'orange',
    'gold',
    'yellow',
    'yellowgreen',
    'green',
    'darkgreen',
    'deepskyblue',
    'blue',
    'darkblue',
    'blueviolet',
    'darkviolet',
    'violet',
    'pink',
    'black',
    'gray',
    'white',
];


// Functions

const createGrid = () => {
 for( i = 0; i < 64; i++) {
    $('.grid').append($('<div class="cell"></div>'));
 }
}

const makePalette = () => {
    for( i = 0; i < PALETTE.length; i++) {
        const nextColor = PALETTE[i];

        $('.palette').append(`<button class="color" style="background-color: ${nextColor}"></button>`)
    }

    $('.palette button').first().addClass('active');
}

// Click functions

function onPaletteClick () {
    // remove active from current pallete button
    $('.palette button').removeClass('active');
    // add active to the target of the click %(this)
    $(this).addClass('active');
}

function onGridClick () {
    const chosenColor = $('.palette .active').css('background-color');

    if ($(this).css('background-color') == chosenColor) {
        $(this).css('background-color', '');
    } else {
        $(this).css('background-color', chosenColor)
    }
}

function onClearClick () {
    $('.grid .cell').css('background-color', '');
}

function onGridFill () {
    const chosenColor = $('.palette .active').css('background-color');

    $('.grid .cell').css('background-color', chosenColor);
}

function onEmptyFill () {
    const chosenColor = $('.palette .active').css('background-color');
    const grid = $('.grid .cell');
    for(let i = 0; i < grid.length; i++) {
        const cells = $(grid[i]);

        if (cells.css('background-color') == 'rgba(0, 0, 0, 0)') {
            cells.css('background-color', chosenColor);
        }
    }
}

//Building The App

createGrid();

makePalette();

$('.palette button').click(onPaletteClick);

$('.grid .cell').click(onGridClick);

$('.clear').click(onClearClick);

$('.fill-all').click(onGridFill);

$('.fill-empty').click(onEmptyFill);