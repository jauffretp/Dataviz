
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
            data: [75, 490],
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


var pieFamilleCollab = new Chart(ctx, {
    type: 'doughnut',
    data: dataEmploiFamille,
    options: {
        responsive: true,
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




ctx = document.getElementById("pieSexeCollabFamille").getContext("2d");

// Les députés emploient leur femme
var dataSexeCollabFamille = {
    labels: [
        "Femmes",
        "Hommes",
    ],
    datasets: [
        {
            data: [54, 21],
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

var pieSexeCollabFamille = new Chart(ctx, {
    type: 'doughnut',
    data: dataSexeCollabFamille,
    options: {
        responsive: true,
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
			        return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attaché(e)s parlementaires' ;
			    }
			}
		}	
    }
});



ctx = document.getElementById("pieSexeCollab").getContext("2d");

// Les collaborateurs sont essentiellement des femmes
var dataPieSexeCollab = {
    labels: [
        "Femmes",
        "Hommes",
    ],
    datasets: [
        {
            data: [1211, 836],
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

var pieSexeCollab = new Chart(ctx, {
    type: 'doughnut',
    data: dataPieSexeCollab,
    options: {
        responsive: true,
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
			        return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attaché(e)s parlementaires' ;
			    }
			}
		}	
    }
});


ctx = document.getElementById("pieFemmeCollab").getContext("2d");

var dataPieFemmeCollab = {
    labels: [
        "Femmes",
        "Hommes",
    ],
    datasets: [
        {
            data: [301, 225],
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

var pieFemmeCollab = new Chart(ctx, {
    type: 'doughnut',
    data: dataPieFemmeCollab,
    options: {
        responsive: true,
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
			        return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attaché(e)s parlementaires' ;
			    }
			}
		}	
    }
});

ctx = document.getElementById("pieHommeCollab").getContext("2d");

 
var dataPieHommeCollab = {
    labels: [
        "Femmes",
        "Hommes",
    ],
    datasets: [
        {
            data: [910, 611],
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


var dataPieHommeCollab = new Chart(ctx, {
    type: 'doughnut',
    data: dataPieHommeCollab,
    options: {
        responsive: true,
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
			        return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attaché(e)s parlementaires' ;
			    }
			}
		}	
    }
});

ctx = document.getElementById("barCollabRapport").getContext("2d");
var data = {
    labels: ["1-2 collaborateur","3-4 collaborateurs","5+ collaborateurs"],
    datasets: [
        {
            label: "Nome moyen de rapports produits",
            backgroundColor: [
                'rgba(88, 148, 244,0.7)',
                'rgba(88, 148, 244,0.7)',
                'rgba(88, 148, 244,0.7)',
            ],
            borderColor: [
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
            ],
            borderWidth: 1,
            data: [0.745, 1.095,1.3025]
        },
        {
            label: "Nombre moyen de propositions écrites",
            backgroundColor: [
                'rgba(43, 219, 184,0.7)',
                'rgba(43, 219, 184,0.7)',
                'rgba(43, 219, 184,0.7)',
            ],
            borderColor: [
               'rgba(43, 219, 184,1)',
               'rgba(43, 219, 184,1)',
               'rgba(43, 219, 184,1)'
            ],
            borderWidth: 1,
            data:[0.865, 0.58,1.6125]
            
        }
    ]
};


var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options:{
        responsive: true,
        maintainAspectRatio: false,
      	tooltips: {
      			callbacks: {
      			    label: function (tooltipItems, data) {
      			        if (tooltipItems.datasetIndex === 0){
      			        	return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' rapports produits en moyenne' ;
      			        }
      			        else {
      			        	return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' propositions écrites en moyenne' ;
      			        }

      			        	
      			    }
      			}
      		}	
      }
});



