let lineNumber = 1;

function addEmployee() {
    const employeeName = document.getElementById('employeeName').value;
    const daysWorked = parseFloat(document.getElementById('daysWorked').value).toFixed(2);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value).toFixed(2);
    const deductionAmount = parseFloat(document.getElementById('deductionAmount').value).toFixed(2);

    const grossPay = (daysWorked * dailyRate).toFixed(2);
    const netPay = (grossPay - deductionAmount).toFixed(2);

    const table = document.getElementById('payrollBody');
    const newRow = table.insertRow(-1);

    const cellNum = newRow.insertCell(0);
    const cellName = newRow.insertCell(1);
    const cellDays = newRow.insertCell(2);
    const cellRate = newRow.insertCell(3);
    const cellGross = newRow.insertCell(4);
    const cellDeduction = newRow.insertCell(5);
    const cellNet = newRow.insertCell(6);
    const cellDelete = newRow.insertCell(7);

    cellNum.textContent = lineNumber;
    cellName.textContent = employeeName;
    cellDays.textContent = daysWorked;
    cellRate.textContent = dailyRate;
    cellGross.textContent = grossPay;
    cellDeduction.textContent = deductionAmount;
    cellNet.textContent = netPay;
    cellDelete.innerHTML = `<button onclick="deleteEmployee(${lineNumber})">Delete</button>`;

    lineNumber++;
}

function deleteEmployee(line) {
    const confirmation = window.confirm('Are you sure you want to delete this employee?');
    if (confirmation) {
        const table = document.getElementById('payrollBody');
        table.deleteRow(line - 1);
        renumberRows();
    }
}

function renumberRows() {
    const table = document.getElementById('payrollBody');
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        rows[i].getElementsByTagName('td')[0].textContent = i + 1;
    }
}

function clearTable() {
    const confirmation = window.confirm('Are you sure you want to clear the table?');
    if (confirmation) {
        const table = document.getElementById('payrollBody');
        table.innerHTML = '';
        lineNumber = 1;
    }
}