
Chart.defaults.global.title.fontSize = 25;
Chart.defaults.global.title.fontFamily = "'Lato', sans-serif";
Chart.defaults.global.title.fontColor = '#000000';

//Chart.defaults.global.title.fontSize = 20;

var ctx = document.getElementById("pieFamilleEmployee").getContext("2d");

console.log(ctx)

var dataEmploiFamille = {
    labels: [
        "Emploie un membre de leur famille",
        "N'emploie pas de membre de leur famille",
    ],
    datasets: [
        {
            data: [80, 497],
            backgroundColor: [
                "#ed0909",
                "#5894f4"
            ],
            hoverBackgroundColor: [
                "#ed0909",
                "#5894f4"
            ]
        }]
};


var myDoughnutChart = new Chart(ctx, {
    type: 'pie',
    data: dataEmploiFamille,
    options: {
        responsive: true,
        // animation:{
        //     animateScale:true
        // },
        title: {
            display: false,
            text: 'Les députés employant un membre de leur famille'
        },
        pieceLabel: {
      		// mode 'label', 'value' or 'percentage', default is 'percentage'
      		mode: 'percentage',
      		fontSize: 15,
      		fontColor: '#330000',
      		fontFamily: "'Lato', sans-serif",
      		fontStyle: 'bold'

		},
		tooltips: {
			callbacks: {
			    label: function (tooltipItems, data) {
			        return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' députés' ;
			    }
			}
		}	
    }
});


