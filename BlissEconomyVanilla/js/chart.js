const ctx = document.getElementById('myChart');    
const graphicPeriod = document.querySelector('#graphic_period');
let myChart;

labelsDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
labelMonths = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
dataIncomes = [50, 575, 910, 800, 125, 30, 200, 100, 350, 350, 700, 620];
dataExpenses = [600, 150, 720, 150, 730, 480, 900, 150, 200, 400, 300, 540];

function addGrpahic() {
    const period = graphicPeriod.value;
    
    let labels = [];
    let dataIncome = [];
    let dataExpense = [];

    switch (period) {

        case 'day':
            const date = new Date();
            labels = [labelsDays[date.getDay()]];
            dataIncome = [dataIncomes[0]];
            dataExpense = [dataExpenses[0]];
            break;
        
        case 'week':
            labels = labelsDays;
            dataIncome = dataIncomes.slice(0, 7);
            dataExpense = dataExpenses.slice(0, 7);
            break;

        case 'month':
            labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            dataIncome = Array(4).fill(dataIncomes.reduce((acc, curr) => acc + curr, 0)); //sum
            dataExpense = Array(4).fill(dataExpenses.reduce((acc, curr) => acc + curr, 0)); //sum
            break;

        case 'year':
            labels = labelMonths;
            dataIncome = dataIncomes;
            dataExpense = dataExpenses;
            break;
        
        default:
            break;
    }

    if (myChart)
        myChart.destroy();

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'INCOME',
                data: dataIncome,
                borderWidth: 1,
                backgroundColor: '#41D158'
            }, {
                label: 'EXPENSES',
                data: dataExpense,
                borderWidth: 1,
                backgroundColor: '#fb6c6c'
            }]
        },
        options: {
            responsive: true,
            plugins:{
                legend: false,
                title: {
                    display: true
                },
            },
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
    });
}

addGrpahic();
graphicPeriod.addEventListener('change', addGrpahic);

