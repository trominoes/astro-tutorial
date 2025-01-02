

/* GENERATE GRID */


// create an offscreen canvas, where undistorted grid will be built
let offScreenCVS = document.createElement("canvas");
let offScreenCTX = offScreenCVS.getContext("2d");

// set dimensions of drawing canvas
offScreenCVS.width = 37;
offScreenCVS.height = 25;

let grid = [];
// 'blank' and 'name' are parameters for my name design on the grid
let blank = [ [ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ], [ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true ], [ true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, false, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ], [ true, true, true, true, true, true, true, true, true, true, false, false, false, true, false, false, false, false, true, false, true, true, false, false, false, true, true, false, false, true, true, true, true, false, true, true, true ], [ true, true, true, true, true, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true, true, true, true ], [ true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true, true, true ], [ true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true ], [ true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true ], [ false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true ], [ true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true ], [ true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true ], [ true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true ], [ true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true ], [ true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true ], [ true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true ], [ true, true, true, true, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false ], [ true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ true, true, true, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, true ], [ true, true, true, true, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, true, true ], [ true, true, true, true, true, true, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true, true, true, true ], [ true, true, true, true, true, true, true, true, true, true, false, false, false, true, true, true, false, true, true, true, true, true, false, true, true, false, false, false, false, true, true, true, true, false, false, true, true ], [ true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ], [ true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ], [ true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true ] ];
let name = [ [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, true, false, false, false, true, false, true, true, true, false, true, false, false, true, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, true, true, false, true, true, false, false, true, false, false, true, true, false, true, false, true, false, false, true, false, true, false, false, true, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, true, false, true, false, true, false, false, true, false, false, true, false, true, true, false, true, false, false, true, false, true, false, false, true, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, true, false, false, false, true, false, false, true, false, false, true, false, false, true, false, true, false, false, true, false, true, false, false, true, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, true, false, false, false, true, false, false, true, false, false, true, false, false, true, false, true, false, false, true, false, true, false, false, true, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, true, false, false, false, true, false, true, true, true, false, true, false, false, true, false, false, true, true, false, false, false, true, true, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, true, true, true, true, false, false, true, true, false, false, true, false, false, true, false, false, true, true, true, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, true, false, true, true, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, true, false, true, false, true, true, false, true, false, true, true, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true, true, true, false, true, false, false, true, false, true, false, false, true, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, true, false, false, true, false, true, false, false, true, false, true, false, false, true, false, true, false, false, true, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, true, true, false, false, true, false, false, true, false, true, false, false, true, false, false, true, true, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ], [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false ] ];

/**
 * generateGrid() initializes and colors the pixels in the offscreen canvas.
 * Pixel color corresponds to certain values, i.e. transparent = no cell,
 * black = background cell, white = feature cell (name design).
 */
function generateGrid() {
    // fill grid with baseline value 0 (normal cells)
    offScreenCTX.fillStyle = "black";
    offScreenCTX.fillRect(0, 0, offScreenCVS.width, offScreenCVS.height);
    let imageData = offScreenCTX.getImageData(
        0,
        0,
        offScreenCVS.width,
        offScreenCVS.height
    );

    let cells = [];
    // recolor all cells, according to 'blank' and 'name' parameters
    for (let y = 0; y < imageData.height; y++) {
        // initialize empty row if it doesn't exist
        if (!cells[y]) {
            cells[y] = [];
        }

        for (let x = 0; x < imageData.width; x++) {
            // initialize each cell in this row
            if (!cells[y][x]) {
                let cell = { x: x, y: y, name: false, shell: true };

                if (name[y][x]) {
                    cell.name = true;
                }
                if (blank[y][x]) {
                    cell.shell = false;
                }

                cells[y][x] = cell;
            }
        }
    }

    // draw design onto offscreen canvas
    let j = 0;
    function recursiveDrawMaze() {
        cells[j].forEach((c) => {
            // name cells are given value 1
            if (c.name) {
                offScreenCTX.fillStyle = "white";
                offScreenCTX.fillRect(c.x, c.y, 1, 1);
            }
            // blank cells are removed/made transparent
            if (!c.shell) {
                offScreenCTX.clearRect(c.x, c.y, 1, 1);
            }

        });
        j += 1;
        if (j < cells.length) {
            recursiveDrawMaze();
        }
    }
    recursiveDrawMaze();
}

/**
 * get2DArray() reads the offscreen canvas and inserts data
 * into the global matrix 'grid', which is later used to draw the 
 * onscreen design. Cells in 'grid' have a color attribute based
 * on the white/black/transparent value in the offscreen canvas pixels,
 * as well as a tree attribute determining whether to draw a tree
 * on that cell.
 */
function get2DArray() {
    //Make the 2D array to hold all objects
    for (let i = 0; i < offScreenCVS.height; i++) {
        grid[i] = [];
        for (let j = 0; j < offScreenCVS.width; j++) {
            grid[i][j] = {
                color: "#aaaaaa",
                tree: false,
                x: j,
                y: i
            };
        }
    }
    let imageData = offScreenCTX.getImageData(
        0,
        0,
        offScreenCVS.width,
        offScreenCVS.height
    );
    for (let i = 0; i < imageData.data.length; i += 4) {
        let x = (i / 4) % offScreenCVS.width,
            y = (i / 4 - x) / offScreenCVS.width;
        let color = `rgba(${imageData.data[i]}, ${imageData.data[i + 1]}, ${imageData.data[i + 2]
            }, ${imageData.data[i + 3]})`;
        switch (color) {
            case "rgba(0, 0, 0, 255)":
                // black pixel -> background cell
                grid[y][x].color = "#bcbcbc";
                break;
            case "rgba(255, 255, 255, 255)":
                // white pixel -> feature cell
                grid[y][x].color = "#30309D";
                break;
            default:
                // transparent pixel -> no cell
                grid[y][x].color = "transparent";
        }
    }
}

generateGrid();
get2DArray();


/* DRAW ON CANVAS */


let sharpen = 2;
let container = document.querySelector(".graphic-container");

// fit canvas to container
let bg = document.querySelector(".bg"),
    bgCtx = bg.getContext("2d"),
    bgw = (bg.width = container.offsetWidth * sharpen),
    bgh = (bg.height = container.offsetHeight * sharpen);

bg.style.width = container.offsetWidth;
bg.style.height = container.offsetHeight;

// cell sizing parameters
let xO = bgw * 0.35;
let yO = bgh * 0.2;
let cellSize = bgw/48;
let cellWidth = cellSize/3;
let perspective = 0.5;
drawMaze();

/**
 * drawMaze() reads the 'grid' and draws 3D cells and trees
 * onto the canvas element according to the color and tree 
 * attributes of each entry in the 'grid' matrix.
 */
function drawMaze() {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            let xPos = xO + cellSize * (x - y);
            let yPos = yO + perspective * (cellSize * (x + y));
            if (grid[y][x].color === "transparent") {
                continue;
            }
            // draw the 3D cell
            drawCube(
                xPos,
                yPos,
                cellSize,
                cellSize,
                cellWidth,
                grid[y][x].color,
                perspective
            );

            // draw the tree
            if (grid[y][x].tree) {
                xPos = xO + cellSize * (x - y);
                yPos = yO + perspective * (cellSize * (x + y));
                yPos -= cellWidth + 0.5 * cellSize;

                drawTree(
                    xPos,
                    yPos,
                    cellSize,
                    perspective
                );
            }
        }
    }
}

/**
 * shadeColor() takes an input hex color code and shades
 * it lighter or darker, according to the percent arg.
 * @param {string} color 
 * @param {number} percent (can be negative)
 * @returns hex color code shaded by 'percent' percent.
 */
function shadeColor(color, percent) {
    color = color.substr(1);
    var num = parseInt(color, 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = ((num >> 8) & 0x00ff) + amt,
        B = (num & 0x0000ff) + amt;
    return (
        "#" +
        (
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        )
            .toString(16)
            .slice(1)
    );
}

/**
 * drawCube() draws a 3D rectangular prism at x,y
 * according to its width, height, color, and perspective
 * parameters.
 * @param {number} x 
 * @param {number} y 
 * @param {number} wx 
 * @param {number} wy 
 * @param {number} h 
 * @param {string} color 
 * @param {number} per 
 */
function drawCube(x, y, wx, wy, h, color, per) {
    // left side
    bgCtx.beginPath();
    bgCtx.moveTo(x, y);
    bgCtx.lineTo(x - wx, y - wx * per);
    bgCtx.lineTo(x - wx, y - h - wx * per);
    bgCtx.lineTo(x, y - h * 1);
    bgCtx.closePath();
    bgCtx.fillStyle = shadeColor(color, 10);
    bgCtx.strokeStyle = "#000000";
    bgCtx.stroke();
    bgCtx.fill();

    // right side
    bgCtx.beginPath();
    bgCtx.moveTo(x, y);
    bgCtx.lineTo(x + wy, y - wy * per);
    bgCtx.lineTo(x + wy, y - h - wy * per);
    bgCtx.lineTo(x, y - h * 1);
    bgCtx.closePath();
    bgCtx.fillStyle = shadeColor(color, -10);
    bgCtx.strokeStyle = "#000000";
    bgCtx.stroke();
    bgCtx.fill();

    // top side
    bgCtx.beginPath();
    bgCtx.moveTo(x, y - h);
    bgCtx.lineTo(x - wx, y - h - wx * per);
    bgCtx.lineTo(x - wx + wy, y - h - (wx * per + wy * per));
    bgCtx.lineTo(x + wy, y - h - wy * per);
    bgCtx.closePath();
    bgCtx.fillStyle = shadeColor(color, 20);
    bgCtx.strokeStyle = "#000000";
    bgCtx.stroke();
    bgCtx.fill();
}

/**
 * drawTree() draws a tree on the canvas
 * at x,y according to height and perspective parameters.
 * @param {number} x 
 * @param {number} y 
 * @param {number} h 
 * @param {number} per 
 */
function drawTree(x, y, h, per) {
    let trunkColor = "#271B10";
    let leafColor = "#345906";
    // tree trunk
    bgCtx.beginPath();
    bgCtx.moveTo(x + h/4, y - h/2);
    bgCtx.ellipse(x, y, h/4, h/4 * per, 0, 0, -Math.PI);
    bgCtx.lineTo(x - h/4, y - h/2);
    bgCtx.closePath();
    bgCtx.fillStyle = shadeColor(trunkColor, 20);
    bgCtx.strokeStyle = "#000";
    bgCtx.stroke();
    bgCtx.fill();

    // tree branch 1
    bgCtx.beginPath();
    bgCtx.moveTo(x, y - 7*h/6);
    bgCtx.lineTo(x + 5*h/6, y - h/2);
    bgCtx.bezierCurveTo(x + 5*h/6, y - h/6, x - 5*h/6, y - h/6, x - 5*h/6, y - h/2);
    bgCtx.closePath();
    bgCtx.fillStyle = shadeColor(leafColor, 20);
    bgCtx.strokeStyle = "#000";
    bgCtx.stroke();
    bgCtx.fill();

    // tree branch 2
    bgCtx.beginPath();
    bgCtx.moveTo(x, y - 5*h/3);
    bgCtx.lineTo(x + 2*h/3, y - h);
    bgCtx.bezierCurveTo(x + 2*h/3, y - 2*h/3, x - 2*h/3, y - 2*h/3, x - 2*h/3, y - h);
    bgCtx.closePath();
    bgCtx.fillStyle = shadeColor(leafColor, 20);
    bgCtx.strokeStyle = "#000";
    bgCtx.stroke();
    bgCtx.fill();

    // tree branch 3
    bgCtx.beginPath();
    bgCtx.moveTo(x, y - 13*h/6);
    bgCtx.lineTo(x + h/2, y - 3*h/2);
    bgCtx.bezierCurveTo(x + h/2, y - 6*h/5, x - h/2, y - 6*h/5, x - h/2, y - 3*h/2);
    bgCtx.closePath();
    bgCtx.fillStyle = shadeColor(leafColor, 20);
    bgCtx.strokeStyle = "#000";
    bgCtx.stroke();
    bgCtx.fill();

}


/* CANVAS EVENTS */

// helper function for converting click coordinates to 'grid' x,y values.
function getTileCoords(e) {
    // get coordinates on canvas, offset by origin
    let xCanvas = e.offsetX * sharpen - xO;
    let yCanvas = e.offsetY * sharpen - yO;
    // get inverse of isometric transformation
    let invX = 0.7 + (yCanvas / perspective + xCanvas) / (2 * cellSize);
    let invY = 0.7 + (yCanvas / perspective - xCanvas) / (2 * cellSize);
    let x = Math.ceil(invX);
    let y = Math.ceil(invY);
    return [x,y];
}

// helper function to check whether x,y values are in bounds of 'grid' matrix.
function inBounds(x,y) {
    return (y >= 0 && y < grid.length && x >= 0 && x < grid[0].length);
}

// ON HOVER over background cells, cursor = pointer
bg.addEventListener("mousemove", (e) => {
    const [x,y] = getTileCoords(e);
    if (inBounds(x,y)) {
        if (grid[y][x].color === "#bcbcbc") {
            bg.style.cursor = "pointer";
        } else {
            bg.style.cursor = "default";
        }
    }
});

// ON CLICK of any cell, plant tree
bg.addEventListener("click", plantTree);

/**
 * On click of a cell on the canvas, plantTree() draws
 * a tree on top of that cell.
 * @param {Event} e 
 */
function plantTree(e) {
    const [x,y] = getTileCoords(e);
    if (inBounds(x,y)) {
        // clicked cell must be a background cell, not already have a tree
        if (grid[y][x].color === "#bcbcbc" && !grid[y][x].tree) {
            grid[y][x].color = "#5A6453";
            grid[y][x].tree = true;
            drawMaze();
        }
    }
}
  
// ON RESIZE, resize the canvas element
const debouncedResize = debounce(onResize, 200);
window.addEventListener('resize', debouncedResize);

function debounce(func, delay) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(func, delay);
    };
}

function onResize() {
    // adjust global params of canvas element
    bgw = (bg.width = container.offsetWidth * sharpen),
    bgh = (bg.height = container.offsetHeight * sharpen);
    bg.style.width = container.offsetWidth;
    bg.style.height = container.offsetHeight;

    xO = bgw * 0.35;
    yO = bgh * 0.2;
    cellSize = bgw/48;
    cellWidth = cellSize/3;
    drawMaze();
}



/* HELPER FUNCTIONS */


// helper functions for generating 'blank' and 'name' parameters
function printBooleans() {
    let boolGrid = [];
    for (let i = 0; i < offScreenCVS.height; i++) {
        boolGrid[i] = [];
        for (let j = 0; j < offScreenCVS.width; j++) {
            boolGrid[i][j] = (grid[i][j].color == "#b94f4f");
        }
    }
    console.log(boolGrid);
}

function handleCanvasClick(e) {
    const [x,y] = getTileCoords(e);
    if (grid[y][x].color === "#bcbcbc") {
        grid[y][x].color = "#b94f4f";
        bgCtx.clearRect(0, 0, bgw, bgh);
        drawMaze();
        printBooleans();
    } else if (grid[y][x].color = "#b94f4f") {
        grid[y][x].color = "#bcbcbc";
        bgCtx.clearRect(0, 0, bgw, bgh);
        drawMaze();
    }
}