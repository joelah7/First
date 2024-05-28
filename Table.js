export class table {
    constructor() {
        this.app = document.getElementById("app");
        this.columns = [];
        this.rows = [];
    }

    setColumns(columns) {
        this.columns = columns;
    }

    setRows(data) {
        this.rows = data;
    }

    addColumn(column) {
        this.columns.push(column);
    }

    addRow(data) {
        this.rows.push(data);
    }

    drawTable() {
        this.app.innerHTML = " ";

        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');

        for (let column of this.columns) {
            const th = document.createElement('th');
            th.textContent = column;
            tr.appendChild(th);
        }

        thead.appendChild(tr);
        table.appendChild(thead);

        for (let item of this.rows) {
            const tr2 = document.createElement('tr');
            for (let column of this.columns) {
                const td = document.createElement('td');
                td.textContent = item[column] || "N/A";
                tr2.appendChild(td);
            }
            tbody.appendChild(tr2);
        }
        table.appendChild(tbody);

        this.app.appendChild(table);
    }
}