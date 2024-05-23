function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        alert('Harap masukkan nilai yang valid');
        return;
    }

    // Menghitung luas segitiga
    const area = 0.5 * base * height;
    const formula = `1/2 * ${base} * ${height}`;
    document.getElementById('area-formula').textContent = formula;
    document.getElementById('area').textContent = area;
}

function calculatePerimeter() {
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        alert('Harap masukkan nilai yang valid');
        return;
    }

    // Menghitung keliling segitiga
    const perimeter = side1 + side2 + side3;
    const formula = `${side1} + ${side2} + ${side3}`;
    document.getElementById('perimeter-formula').textContent = formula;
    document.getElementById('perimeter').textContent = perimeter;
}

function resetArea() {
    document.getElementById('area-formula').textContent = '';
    document.getElementById('area').textContent = '';
}

function resetPerimeter() {
    document.getElementById('perimeter-formula').textContent = '';
    document.getElementById('perimeter').textContent = '';
}
