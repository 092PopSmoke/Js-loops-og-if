var x, y, chr;
for (x = 1; x <= 6; x++) {
    for (y = 1; y < x; y++) {
        chr = chr + ("*");
    }
    console.log(chr);
    chr = '';
}


// hentet fra https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercise-10.php