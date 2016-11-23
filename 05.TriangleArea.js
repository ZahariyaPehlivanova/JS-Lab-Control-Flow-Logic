function area([a,b,c]) {
    [a,b,c] = [a,b,c].map(Number);
    let calc = (a + b + c) / 2;
    let area = Math.sqrt(calc * (calc - a) * (calc - b) * (calc - c));
    return area;
}
