
Chart.defaults.global.title.fontSize = 25;
Chart.defaults.global.title.fontFamily = "'Lato', sans-serif";
Chart.defaults.global.title.fontColor = '#000000';
Chart.defaults.global.animation.duration = 0

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
              if(tooltipItems.index === 1){
                return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attachés parlementaires «familiaux» ' ;
              }
              else{
                
                return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attachées parlementaires «familiales»' ;
              }
			        
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
              if(tooltipItems.index === 1){
                return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attachés parlementaires' ;
              }
              else{
                return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attachées parlementaires' ;
              }
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
              if(tooltipItems.index === 1){
                return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attachés parlementaires' ;
              }
              else{
                return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attachées parlementaires' ;
              }
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
              if(tooltipItems.index === 1){
                return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attachés parlementaires' ;
              }
              else{
                return  data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' attachées parlementaires' ;
              }
			    }
			}
		}	
    }
});

ctx = document.getElementById("barCollabRapport").getContext("2d");
var dataBarCollabRapport = {
    labels: ["1-2 collaborateur","3-4 collaborateurs","5+ collaborateurs"],
    datasets: [
        {
            label: "Nombre moyen de rapports produits",
            backgroundColor: [
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
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
                'rgba(43, 219, 184,0.8)',
                'rgba(43, 219, 184,0.8)',
                'rgba(43, 219, 184,0.8)',
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


var barCollabRapport = new Chart(ctx, {
    type: 'bar',
    data: dataBarCollabRapport,
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

ctx = document.getElementById("barPresenceMandats").getContext("2d");
var dataBarPresenceMandats = {
    labels: [" 1er mandat "," 2e mandat "," 3e mandat ", " 4e mandat "],
    datasets: [
        {
            label: "Présence moyenne en comission",
            backgroundColor: [
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)'
            ],
            borderColor: [
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)'
            ],
            borderWidth: 1,
            data: [48.97, 41.85,40.83, 33.57]
        }
    ] 
};


var barPresenceMandats = new Chart(ctx, {
    type: 'bar',
    data: dataBarPresenceMandats,
    options:{
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' semaines de présence en moyenne' ;
                    

                      
                }
            }
          } 
      }
});



ctx = document.getElementById("barRapportMandats").getContext("2d");
var dataBarRapportsMandats = {
    labels: [" 1er mandat "," 2e mandat "," 3e mandat ", " 4e mandat "],
    datasets: [
        {
            label: "Nombre moyen de rapports produits",
            backgroundColor: [
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)'
            ],
            borderColor: [
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)'
            ],
            borderWidth: 1,
            data: [1.40, 1.15,1.02, 0.64]
        }
    ] 
};

var barRapportsMandats = new Chart(ctx, {
    type: 'bar',
    data: dataBarRapportsMandats,
    options:{
        responsive: true,
        maintainAspectRatio: false,
        scales:{
          xAxes:[{
              scaleLabel:{
                display:false,
                labelString:"Nombre de mandat",
              }
          }]
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' rapports produits en moyenne' ;
                }
            }
          } 
      }
});



ctx = document.getElementById("barAmendementsAge").getContext("2d");

var dataBarAmendementsAge = {
    labels: ["Entre 30 et 40 ans","Entre 40 et 50 ans","Entre 50 et 60 ans", "Entre 60 et 70 ans", "Plus de 70 ans"],
    datasets: [
        {
            label: "Nombre moyen d'amendements adoptés",
            backgroundColor: [
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)'
            ],
            borderColor: [
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)'
            ],
            borderWidth: 1,
            data: [137, 65.76, 67.48, 60.27, 38.37]
        }
    ] 
};

var barAmendementsAge = new Chart(ctx, {
    type: 'bar',
    data: dataBarAmendementsAge,
    options:{
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' amendements adoptés en moyenne' ;
                    

                      
                }
            }
          } 
      }
});


ctx = document.getElementById("barInterventionsAge").getContext("2d");

var dataBarInterventionsAge = {
    labels: ["Entre 20 et 30 ans","Entre 30 et 40 ans","Entre 40 et 50 ans","Entre 50 et 60 ans", "Entre 60 et 70 ans", "Plus de 70 ans"],
    datasets: [
        {
            label: "Nombre moyen d'interventions courtes en hémicycle",
            backgroundColor: [
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)'
            ],
            borderColor: [
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)'
            ],
            borderWidth: 1,
            data: [74, 90.2, 70.4, 76.26, 58.59, 28.13]
        }
    ] 
};

var barInterventionsAge = new Chart(ctx, {
    type: 'bar',
    data: dataBarInterventionsAge,
    options:{
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' interventions courtes en hémicycle en moyenne' ;
                    

                      
                }
            }
          } 
      }
});



ctx = document.getElementById("barTweetComission").getContext("2d");

var dataTweetComission = {
    labels: ["Entre 0 et 10K tweets","Entre 10K et 20K tweets","Entre 20K et 30K tweets","Plus de 30K tweets"],
    datasets: [
        {
            label: "Nombre moyen d'interventions courtes en hémicycle",
            backgroundColor: [
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)',
                'rgba(88, 148, 244,0.8)'
            ],
            borderColor: [
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)',
               'rgba(88, 148, 244,1)'
            ],
            borderWidth: 1,
            data: [43.68, 37.18, 28.75, 17]
        }
    ] 
};

var barTweetComission = new Chart(ctx, {
    type: 'bar',
    data: dataTweetComission,
    options:{
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' semaines de présence en comission en moyenne' ;
                    

                      
                }
            }
          } 
      }
});


// dataTweetsParti
// labelDepute
ctx = document.getElementById("bubbleTweetFollower").getContext("2d");

var bubbleTweetFollower = new Chart(ctx, {
    type: 'bubble',
    data: dataTweetsParti,
    options:{
        responsive: true,
        maintainAspectRatio: false,
        legend:{
          position:"bottom"
        },
        scales:{
          yAxes:
            [{
              scaleLabel:{
                display:true,
                labelString:"Nombre de tweets",
                fontSize: 15,
                fontColor: '#330000',
                fontFamily: "'Lato', sans-serif",
                fontStyle: 'bold'

              }
            }],
          xAxes:[{
              scaleLabel:{
                display:true,
                labelString:"Nombre de followers",
                fontSize: 15,
                fontColor: '#330000',
                fontFamily: "'Lato', sans-serif",
                fontStyle: 'bold'

              }
          }]
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItems, data) {
                    var parti = data.datasets[tooltipItems.datasetIndex].label
                    var tweets = data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index]["y"]
                    var followers = data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index]["x"]
                    var name = labelDepute[tooltipItems.datasetIndex][tooltipItems.index]
                    var tooltip = new Array(name, parti, tweets + " tweets",followers + " followers")
                    return tooltip;
                }
            }
          } 
      }
});