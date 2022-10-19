const button = document.getElementById("build");
const output = document.getElementById("output");

button.addEventListener("click", buildTable);
document.addEventListener("keydown", keyDown);

function validate(id) {
    const element = document.getElementById(id);
    if (element.checkValidity()) {
        return Number(element.value);
    }
    return Number.NaN;
}

function keyDown(event) {
    if (event.code == "Enter" && !event.repeat) {
        buildTable();
    }
}

function buildTable() {
    
    const n = validate("n"); // Number of points
    const r = validate("r"); // Radius
    const x0 = validate("x0"); // Center abscissa
    const y0 = validate("y0"); // Center ordinate

    if (!Number.isNaN(n) && !Number.isNaN(r) && !Number.isNaN(x0) && !Number.isNaN(y0)) {
        // Delete the previous output table (if applicable)
        while (output.rows.length > 1) {
            output.deleteRow(-1);
        }

        let startingAngle = 0;
        const angleIncrements = 45;
        const radianConverter = Math.PI/180;

        for (let i = 0; i < n; i++){
            let x = r * Math.cos(startingAngle * radianConverter) + x0;
            let y = r * Math.sin(startingAngle * radianConverter) + y0;

            let row = output.insertRow(-1);            
            let cell = row.insertCell(-1);

            cell.className = "output"; //para inserir o numero da iteração
            cell.innerHTML = i + 1;

            cell = row.insertCell(-1); //para inserir o angulo
            cell.className = "output";
            cell.innerHTML = startingAngle.toFixed(2);

            cell = row.insertCell(-1); //para inserir o x
            cell.className = "output";
            cell.innerHTML = x.toFixed(4);

            cell = row.insertCell(-1); //para inserir o y
            cell.className = "output";
            cell.innerHTML = y.toFixed(4);

            startingAngle += angleIncrements;
        }
    }
}