const EquipmentsMock = [
 {
      "id": 1,
      "description": "Com a máquina NESCAFÉ® Alegria, você oferece variedade de cappuccinos e achocolatados para o seu negócio. É perfeita para quem quer qualidade, praticidade e padronização, pois a máquina conta com 8 opções de bebidas saborosas, cremosas e exclusivas da Nestlé®.",
      "name": "Prima",
      "height": "65,0 cm",
      "image": 'PrimaPremix',
      "width": "37,0 cm",
      "deep": "44,0 cm",
      "weight": "34,0 Kg",
      "potency": "1600W",
      "tension": "220V",
      "revenues": [
          {
              "title": "AO 140ml LP",
              "src": "AO140mlLP"
          },
          {
              "title": "AO 90ml LP",
              "src": 'AO90mlLP'
          },
          {
              "title": "AP 140ml LP",
              "src": "AP140mlLP"
          },
          {
              "title": "AP 90ml LP",
              "src": "AP90mlLP"
          }
        ],
     "issues": [
			 {
					"id": 0,
					"name": "off 3",
					"problems": [ 
							"Bandeja de resíduos cheia.",
					],
					"resolves": [
							"Esvazie a bandeja, verifique se sensor da bandeja está seco e reinicie o equipamento.", 
					],
				},
			 {
          "id": 1,
          "name": "off 6A",
          "problems": [ 
							"1° Verifique se há água no PDV.",
							"2° Verifique se há fluxo de água, após o filtro(checar a validade do mesmo).",  
							"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
					],
						"resolves": [
              "1° Verifique se há água no PDV", 
              "2° Verifique o fluxo de água, após o filtro.", 
              "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.", 
          ],
        },
       {  
          "id": 2,
          "name": "off 6B",
          "problems": [
						  "O circuito da caldeira instantânea foi reabastecido com água, mas nenhuma bebida foi servida; o circuito de alimentação pode ter um vazamento.",
					],
					"resolves": [
              "1° Verifique se há água no PDV" , 
              "2° Verifique o fluxo de água, após o filtro.",
              "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
          ],
       	},
       {  
          "id": 3,
          "name": "off 6C",
          "problems": [
						  "Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;",
					],
					"resolves": [
              "1° Verifique se há água no PDV" , 
              "2° Verifique o fluxo de água, após o filtro.",
              "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
          ],
				},
			 {
          "id": 4,
          "name": "17A, B ou C",
          "problems": [ 
							"Tecla pressionada por muito tempo ou travada no acionamento.",
					],
					"resolves": [
              "1° Reinicie o equipamento", 
              "2° Botão em curto, verificar se há algo na parte interna da porta ou subtituir a parte danificada.", 
          ],
				},
			 {  
          "id": 5,
          "name": "24A",
          "problems": [
						  "O valor de tensão real de 24 V cc é maior do que o valor tolerado.",
					],
					"resolves": [
              "Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
          ],
				},
			 {
          "id": 6,
          "name": "24B",
          "problems": [ 
							"O valor de tensão de 24 V cc medido está abaixo do limiar admitido ou totalmente ausente, por exemplo, porque um fusível disparou; descubra e remova as causas deste erro antes de ligar novamente a máquina.",
					],
					"resolves": [
							"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
          ],
				},
			 {
          "id": 7,
          "name": "31A",
          "problems": [ 
							"A temperatura da água da caldeira de pressão é superior ao valor programado;.",
					],
					"resolves": [
							"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
          ],
				},
			 {
          "id": 8,
          "name": "31B",
          "problems": [ 
							"A água não consegue atingir a temperatura definida.",
					],
					"resolves": [
							"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
          ],
				},
			 {  
          "id": 9,
          "name": "33A",
          "problems": [
							"A temperatura da água da caldeira é superior ao valor configurado.",
					],
					"resolves": [
              "Verifique a sonda de temperatura, Termo fusível rearmável(veja se o botão de acionamento está acionando e desacionando) e a resistência da caldeira(Meça a continuidade).",
          ],
				},
			 {  
          "id": 10,
          "name": "33B",
          "problems": [
							"A água da caldeira não conseguiu alcançar a temperatura programada.",
					],
					"resolves": [
							"1° Verifique se o termo fusível rearmável está acionado, se estiver acionado, investigue o que ocasionou o acionamento do mesmo. Por exemplo: Resistencia aberta / Sonda de temperatura não consegue medir a temperatura da água.",
							"2° Resistência não recebe a tensão(220V), meça a saída dos cabos da placa de programação que irão para resistência da caldeira.",
				  ],
				},															
			],
    },
 {
    	"id": 2,
    	"description": "Com a máquina NESCAFÉ® Alegria, você oferece variedade de cappuccinos e achocolatados para o seu negócio. É perfeita para quem quer qualidade, praticidade e padronização, pois a máquina conta com 8 opções de bebidas saborosas, cremosas e exclusivas da Nestlé®.",
    	"name": "Lioness",
  	  "height": "50,0 cm",
   	  "image": 'Lioness',
  	  "width": "37,0 cm",
  	  "deep": "45,0 cm",
  	 	"weight": "27,0 Kg",
  	  "potency": "1600W",
      "tension": "220V",
      "revenues": [
          {
              "title": "AO 140ml LP",
              "src": "AO140mlLP"
          },
          {
              "title": "AO 90ml LP",
              "src": "AO90mlLP"
          },
          {
              "title": "AP 140ml LP",
              "src": "AP140mlLP"
          },
          {
              "title": "AP 90ml LP",
              "src": "AO90mlLP"
          }
        ],
     "issues": [
				{
					"id": 0,
					"name": "off 3",
					"problems": [ 
							"Bandeja de resíduos cheia.",
					],
					"resolves": [
							"Esvazie a bandeja, verifique se sensor da bandeja está seco e reinicie o equipamento.", 
					],
				},
			 {
					"id": 1,
					"name": "off 6A",
					"problems": [ 
							"1° Verifique se há água no PDV.",
							"2° Verifique se há fluxo de água, após o filtro(checar a validade do mesmo).",  
							"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
					],
					"resolves": [
						"1° Verifique se há água no PDV", 
						"2° Verifique o fluxo de água, após o filtro.", 
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.", 
					],
				},
		   {  
					"id": 2,
					"name": "off 6B",
					"problems": [
							"O circuito da caldeira instantânea foi reabastecido com água, mas nenhuma bebida foi servida; o circuito de alimentação pode ter um vazamento.",
					],
					"resolves": [
							"1° Verifique se há água no PDV" , 
							"2° Verifique o fluxo de água, após o filtro.",
							"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
					],
				},
		 {  
				"id": 3,
				"name": "off 6C",
				"problems": [
						"Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;",
				],
				"resolves": [
						"1° Verifique se há água no PDV" , 
						"2° Verifique o fluxo de água, após o filtro.",
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				],
			},
		 {
				"id": 4,
				"name": "17A, B ou C",
				"problems": [ 
						"Tecla pressionada por muito tempo ou travada no acionamento.",
				],
				"resolves": [
						"1° Reinicie o equipamento", 
						"2° Botão em curto, verificar se há algo na parte interna da porta ou subtituir a parte danificada.", 
				],
			},
		 {  
				"id": 5,
				"name": "24A",
				"problems": [
						"O valor de tensão real de 24 V cc é maior do que o valor tolerado.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 6,
				"name": "24B",
				"problems": [ 
						"O valor de tensão de 24 V cc medido está abaixo do limiar admitido ou totalmente ausente, por exemplo, porque um fusível disparou; descubra e remova as causas deste erro antes de ligar novamente a máquina.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 7,
				"name": "31A",
				"problems": [ 
						"A temperatura da água da caldeira de pressão é superior ao valor programado;.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {
				"id": 8,
				"name": "31B",
				"problems": [ 
						"A água não consegue atingir a temperatura definida.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {  
				"id": 9,
				"name": "33A",
				"problems": [
						"A temperatura da água da caldeira é superior ao valor configurado.",
				],
				"resolves": [
						"Verifique a sonda de temperatura, Termo fusível rearmável(veja se o botão de acionamento está acionando e desacionando) e a resistência da caldeira(Meça a continuidade).",
				],
			},
		 {  
				"id": 10,
				"name": "33B",
				"problems": [
						"A água da caldeira não conseguiu alcançar a temperatura programada.",
				],
				"resolves": [
						"1° Verifique Termo fusível localizado na parte interna da resistência(Meça continuidade, caso não haja substitua-o.",
						"2° Verifique se o termo fusível rearmável está acionado, se estiver acionado, investigue o que ocasionou o acionamento do mesmo. Por exemplo: Resistencia aberta / Sonda de temperatura não consegue medir a temperatura da água.",
						"3° Resistência não recebe a tensão(220V), meça a saída dos cabos da placa de programação que irão para resistência da caldeira.",
				],
			},
    ],
  },
 {
      "id": 3,
      "description": "Com a máquina NESCAFÉ® Alegria, você oferece variedade de cappuccinos e achocolatados para o seu negócio. É perfeita para quem quer qualidade, praticidade e padronização, pois a máquina conta com 6 opções de bebidas saborosas, cremosas e exclusivas da Nestlé®.",
      "name": "A6/30",
      "height": "56,0 cm",
      "image": 'A630',
      "width": "31,5 cm",
      "deep": "49,0 cm",
      "weight": "20,4 Kg",
      "potency": "1300W",
      "tension": "220V",
      "revenues": [
          {
              "title": "X 140ml",
              "src": "X140ml"
          },
          {
              "title": "X 90ml",
              "src": "X90ml"
          },
          {
              "title": "AM 140ml",
              "src": "AM140ml"
          },
          {
              "title": "AM 90ml",
              "src": "AM90ml"
          }
        ],
     "issues": [
			{
				"id": 0,
				"name": "off 3",
				"problems": [ 
						"Bandeja de resíduos cheia.",
				],
				"resolves": [
						"Esvazie a bandeja, verifique se sensor da bandeja está seco e reinicie o equipamento.", 
				],
			},
		 {
				"id": 1,
				"name": "off 6A",
				"problems": [ 
						"1° Verifique se há água no PDV.",
						"2° Verifique se há fluxo de água, após o filtro(checar a validade do mesmo).",  
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				],
					"resolves": [
						"1° Verifique se há água no PDV", 
						"2° Verifique o fluxo de água, após o filtro.", 
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.", 
				],
			},
		 {  
				"id": 2,
				"name": "off 6B",
				"problems": [
						"O circuito da caldeira instantânea foi reabastecido com água, mas nenhuma bebida foi servida; o circuito de alimentação pode ter um vazamento.",
				],
				"resolves": [
						"1° Verifique se há água no PDV" , 
						"2° Verifique o fluxo de água, após o filtro.",
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				],
			},
		 {  
				"id": 3,
				"name": "off 6C",
				"problems": [
						"Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;",
				],
				"resolves": [
						"1° Verifique se há água no PDV" , 
						"2° Verifique o fluxo de água, após o filtro.",
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				],
			},
		 {
				"id": 4,
				"name": "17A, B ou C",
				"problems": [ 
						"Tecla pressionada por muito tempo ou travada no acionamento.",
				],
				"resolves": [
						"1° Reinicie o equipamento", 
						"2° Botão em curto, verificar se há algo na parte interna da porta ou subtituir a parte danificada.", 
				],
			},
		 {  
				"id": 5,
				"name": "24A",
				"problems": [
						"O valor de tensão real de 24 V cc é maior do que o valor tolerado.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 6,
				"name": "24B",
				"problems": [ 
						"O valor de tensão de 24 V cc medido está abaixo do limiar admitido ou totalmente ausente, por exemplo, porque um fusível disparou; descubra e remova as causas deste erro antes de ligar novamente a máquina.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 7,
				"name": "31A",
				"problems": [ 
						"A temperatura da água da caldeira de pressão é superior ao valor programado;.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {
				"id": 8,
				"name": "31B",
				"problems": [ 
						"A água não consegue atingir a temperatura definida.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {  
				"id": 9,
				"name": "33A",
				"problems": [
						"A temperatura da água da caldeira é superior ao valor configurado.",
				],
				"resolves": [
						"Verifique a sonda de temperatura, Termo fusível rearmável(veja se o botão de acionamento está acionando e desacionando) e a resistência da caldeira(Meça a continuidade).",
				],
			},
		 {  
				"id": 10,
				"name": "33B",
				"problems": [
						"A água da caldeira não conseguiu alcançar a temperatura programada.",
				],
				"resolves": [
						"1°Verifique Termo fusível localizado na parte interna da resistência(Meça continuidade, caso não haja substitua-o.",
						"2° Verifique se o termo fusível rearmável está acionado, se estiver acionado, investigue o que ocasionou o acionamento do mesmo. Por exemplo: Resistencia aberta / Sonda de temperatura não consegue medir a temperatura da água.",
						"3° Resistência não recebe a tensão(220V), meça a saída dos cabos da placa de programação que irão para resistência da caldeira.",
				],
			},															
		],
  },    
 {
      "id": 4,
      "description": "Com a máquina NESCAFÉ® Alegria, você oferece variedade de cappuccinos e achocolatados para o seu negócio. É perfeita para quem quer qualidade, praticidade e padronização, pois a máquina conta com 8 opções de bebidas saborosas, cremosas e exclusivas da Nestlé®.",
      "name": "A8/60",
      "height": "61,5 cm",
      "image": 'A860',
      "width": "46,0 cm",
      "deep": "62,0 cm",
      "weight": "35,0 Kg",
      "potency": "1600W",
      "tension": "220V",
      "revenues": [
          {
              "title": "AO 140ml",
              "src": "AO140ml"
          },
          {
              "title": "AO 90ml",
              "src": "AO90ml"
          },
          {
              "title": "AP 140ml",
              "src": "AP140ml"
          },
          {
              "title": "AP 90ml",
              "src": "AP90ml"
          },
          {
              "title": "C018",
              "src": "C018"
          }
			  ],
		 "issues": [
			{
				"id": 0,
				"name": "off 3",
				"problems": [ 
						"Bandeja de resíduos cheia.",
				],
				"resolves": [
						"Esvazie a bandeja, verifique se sensor da bandeja está seco e reinicie o equipamento.", 
				],
			},
		 {
				"id": 1,
				"name": "off 6A",
				"problems": [ 
						"1° Verifique se há água no PDV.",
						"2° Verifique se há fluxo de água, após o filtro(checar a validade do mesmo).",  
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				],
					"resolves": [
						"1° Verifique se há água no PDV", 
						"2° Verifique o fluxo de água, após o filtro.", 
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.", 
				],
			},
		 {  
				"id": 2,
				"name": "off 6B",
				"problems": [
						"O circuito da caldeira instantânea foi reabastecido com água, mas nenhuma bebida foi servida; o circuito de alimentação pode ter um vazamento.",
				],
				"resolves": [
						"1° Verifique se há água no PDV" , 
						"2° Verifique o fluxo de água, após o filtro.",
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				],
			},
		 {  
				"id": 3,
				"name": "off 6C",
				"problems": [
						"Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;",
				],
				"resolves": [
						"1° Verifique se há água no PDV" , 
						"2° Verifique o fluxo de água, após o filtro.",
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				],
			},
		 {
				"id": 4,
				"name": "17A, B ou C",
				"problems": [ 
						"Tecla pressionada por muito tempo ou travada no acionamento.",
				],
				"resolves": [
						"1° Reinicie o equipamento", 
						"2° Botão em curto, verificar se há algo na parte interna da porta ou subtituir a parte danificada.", 
				],
			},
		 {  
				"id": 5,
				"name": "24A",
				"problems": [
						"O valor de tensão real de 24 V cc é maior do que o valor tolerado.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 6,
				"name": "24B",
				"problems": [ 
						"O valor de tensão de 24 V cc medido está abaixo do limiar admitido ou totalmente ausente, por exemplo, porque um fusível disparou; descubra e remova as causas deste erro antes de ligar novamente a máquina.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 7,
				"name": "31A",
				"problems": [ 
						"A temperatura da água da caldeira de pressão é superior ao valor programado;.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {
				"id": 8,
				"name": "31B",
				"problems": [ 
						"A água não consegue atingir a temperatura definida.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {  
				"id": 9,
				"name": "33A",
				"problems": [
						"A temperatura da água da caldeira é superior ao valor configurado.",
				],
				"resolves": [
						"Verifique a sonda de temperatura, Termo fusível rearmável(veja se o botão de acionamento está acionando e desacionando) e a resistência da caldeira(Meça a continuidade).",
				],
			},
		 {  
				"id": 10,
				"name": "33B",
				"problems": [
						"A água da caldeira não conseguiu alcançar a temperatura programada.",
				],
				"resolves": [
						"1°Verifique Termo fusível localizado na parte interna da resistência(Meça continuidade, caso não haja substitua-o.",
						"2° Verifique se o termo fusível rearmável está acionado, se estiver acionado, investigue o que ocasionou o acionamento do mesmo. Por exemplo: Resistencia aberta / Sonda de temperatura não consegue medir a temperatura da água.",
						"3° Resistência não recebe a tensão(220V), meça a saída dos cabos da placa de programação que irão para resistência da caldeira.",
				],
			},															
		],			
  },
 {
      "id": 5,
      "description": "NESCAFÉ Milano – A bebida premium perfeita para aqueles momentos especiais. Surpreenda-se com NESCAFÉ® Milano, uma solução que entrega bebidas premium em poucos segundos, com padronização e qualidade garantidas.",
      "name": "M8/60",
      "height": "66,0 cm",
      "image": 'M860',
      "width": "46,0 cm",
      "deep": "62,0 cm",
      "weight": "35,8 Kg",
      "potency": "1600W",
      "tension": "220V",
      "revenues": [
          {
              "title": "B M860",
              "src": "BM860"
          },
          {
              "title": "E M860",
              "src": "EM860"
          }
				],
		 "issues": [
			{
				"id": 0,
				"name": "off 3",
				"problems": [ 
						"Bandeja de resíduos cheia.",
				],
				"resolves": [
						"Esvazie a bandeja, verifique se sensor da bandeja está seco e reinicie o equipamento.", 
				],
			},
		 {
				"id": 1,
				"name": "off 6A",
				"problems": [ 
						"1° Verifique se há água no PDV.",
						"2° Verifique se há fluxo de água, após o filtro(checar a validade do mesmo).",  
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				],
					"resolves": [
						"1° Verifique se há água no PDV", 
						"2° Verifique o fluxo de água, após o filtro.", 
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.", 
				],
			},
		 {  
				"id": 2,
				"name": "off 6B",
				"problems": [
						"O circuito da caldeira instantânea foi reabastecido com água, mas nenhuma bebida foi servida; o circuito de alimentação pode ter um vazamento.",
				],
				"resolves": [
						"1° Verifique se há água no PDV" , 
						"2° Verifique o fluxo de água, após o filtro.",
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				],
			 },
		 {  
				"id": 3,
				"name": "off 6C",
				"problems": [
						"Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;",
				],
				"resolves": [
						"1° Verifique se há água no PDV" , 
						"2° Verifique o fluxo de água, após o filtro.",
						"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				],
			},
		 {
				"id": 4,
				"name": "17A, B ou C",
				"problems": [ 
						"Tecla pressionada por muito tempo ou travada no acionamento.",
				],
				"resolves": [
						"1° Reinicie o equipamento", 
						"2° Botão em curto, verificar se há algo na parte interna da porta ou subtituir a parte danificada.", 
				],
			},
		 {  
				"id": 5,
				"name": "24A",
				"problems": [
						"O valor de tensão real de 24 V cc é maior do que o valor tolerado.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 6,
				"name": "24B",
				"problems": [ 
						"O valor de tensão de 24 V cc medido está abaixo do limiar admitido ou totalmente ausente, por exemplo, porque um fusível disparou; descubra e remova as causas deste erro antes de ligar novamente a máquina.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 7,
				"name": "31A",
				"problems": [ 
						"A temperatura da água da caldeira de pressão é superior ao valor programado;.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {
				"id": 8,
				"name": "31B",
				"problems": [ 
						"A água não consegue atingir a temperatura definida.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {  
				"id": 9,
				"name": "33A",
				"problems": [
						"A temperatura da água da caldeira é superior ao valor configurado.",
				],
				"resolves": [
						"Verifique a sonda de temperatura, Termo fusível rearmável(veja se o botão de acionamento está acionando e desacionando) e a resistência da caldeira(Meça a continuidade).",
				],
			},
		 {  
				"id": 10,
				"name": "33B",
				"problems": [
						"A água da caldeira não conseguiu alcançar a temperatura programada.",
				],
				"resolves": [
						"1°Verifique Termo fusível localizado na parte interna da resistência(Meça continuidade, caso não haja substitua-o.",
						"2° Verifique se o termo fusível rearmável está acionado, se estiver acionado, investigue o que ocasionou o acionamento do mesmo. Por exemplo: Resistencia aberta / Sonda de temperatura não consegue medir a temperatura da água.",
						"3° Resistência não recebe a tensão(220V), meça a saída dos cabos da placa de programação que irão para resistência da caldeira.",
				],
			},															
		],						
  },
 {
      "id": 6,
      "description": "Exclusividade :Máquina italiana da mais alta qualidade, com o novo café 100% arábica torrado e moido na hora. Rendimento: Consumo total de seus insumos, sem descarte ou desperdício. Eficiência: Muito mais agilidade no preparo Economia: Não tem caldeira, por isso consome 90% menos energia que as máquinas do mercado. Máquinas em comodato e assistência técnica gratuita. Marcas Exclusivas: Uma perfeita solução com 12 opções de bebidas, todas com marcas que só a Nestlé pode oferecer",
      "name": "ATP60E",
      "height": "66,6 cm",
      "image": 'ATP60E',
      "width": "42,2 cm",
      "deep": "59,9 cm",
      "weight": "35,2 Kg",
      "potency": "3000W",
      "tension": "220V",
      "revenues": [
          {
              "title": "AI 140ml",
              "src": "AI140ml"
          },
          {
              "title": "AI 90ml",
              "src": "AI90ml"
          },
          {
              "title": "C001",
              "src": "C001"
          }
			  ],
		 "issues": [
		   {
					"id": 0,
					"name": "off 3",
					"problems": [ 
							"Bandeja de resíduos cheia.",
					],
					"resolves": [
							"Esvazie a bandeja, verifique se sensor da bandeja está seco e reinicie o equipamento.", 
					],
				},
			 {
					"id": 1,
					"name": "off 6A",
					"problems": [
							"Falta de água: Tempo de enchimento da caldeira instantânea muito longo, o fornecimento de água pode estar totalmente escasso e sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água.",
					],
					"resolves": [
						 	"1° Verifique se há água no PDV.", 
						 	"2° Verifique o fluxo de água, após o filtro.", 
						 	"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.", 
					]
				},
			 {  
					"id": 2,
					"name": "off 6B",
					"problems": [
							"O circuito da caldeira instantânea foi reabastecido com água, mas nenhuma bebida foi servida; o circuito de alimentação pode ter um vazamento.",
					],
					"resolves": [
						 	"1° Verifique se há água no PDV." , 
						 	"2° Verifique o fluxo de água, após o filtro.",
						 	"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
					]
				},
			 {  
					"id": 3,
					"name": "off 6C",
					"problems": [
							"Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;",
					],
					"resolves": [
						 	"1° Verifique se há água no PDV." , 
						 	"2° Verifique o fluxo de água, após o filtro.",
						 	"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
					]
				},
			 {  
					"id": 4,
					"name": "7R",
					"problems": [
							"Erro na fase de recirculação da água.",
					],
					"resolves": [
						 	"Verifique o funcionamento da solenoide de recirculação e o contador volumétrico." , 
					]
				},
			 {  
					"id": 5,
					"name": "8A",
					"problems": [
							"1° O Vareflex não conseguiu girar adequadamente; o microinterruptor que controla a rotação do Vareflex não está funcionando adequadamente, não está conectado ou mal posicionado.", 
							"2° Motor de infusão não funciona ou não está conectado; durante o ciclo de reinicialização ou de partida, os pulsos do codificador não são detectados pela CPU.",
			 ],
					"resolves": [
						 	"1° Verifique o funcionamento e a posição do microinterruptor.", 
							"2° Verifique o funcionamento do grupo infusor, ele deve se mover livremente.",
							"3° Verifique os componentes do grupo motorredutor: motor, polias, correia.",
							"4° Verifique a placa do codificador, a placa da CPU e a fiação.",
					]
				},
			 {  
					"id": 6,
					"name": "8B",
					"problems": [
							"1° A máquina não reconhece a presença do Vareflex na sua posição de trabalho correta; verifique o microinterruptor de presença.",
							"2° A pressão exercida na câmara não é suficiente para servir espresso; a dose do produto moído na câmara de infusão pode ser muito pequena.",
							"3° Durante o ciclo de reinicialização ou de partida, o microinterruptor de controle não está pressionado ou não está funcionando, o infusor não está presente.",
					],
					"resolves": [
						 	"1° Verifique o funcionamento do microinterruptor." , 
						 	"2° Verifique a dose do produto moído na câmara de infusão.",
						 	"3° Verifique se o grupo está bem instalado, ou o funcionamento do microinterruptor.",
					]
				},
			 {  
					"id": 7,
					"name": "8C",
					"problems": [
							"1° O pistão superior não está se movendo adequadamente.",
							"2° A pressão exercida na câmara não é suficiente para servir espresso; a dose do produto moído na câmara de infusão pode ser muito pequena.",
							"3° Durante o ciclo de reinicialização ou de partida, enquanto a câmara de infusão da cafeteira estiver se movendo para cima, o limite de consumo atual é atingido cedo demais.",
		      ],
					"resolves": [
						 	"1° Verifique se há água no PDV" , 
						 	"2° Verifique o fluxo de água, após o filtro.",
						 	"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
					]
				},
			 {  
					"id": 8,
					"name": "9A",
					"problems": [
							"O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
				],
					"resolves": [
						 	"1° Verificar o funcionamento do moedor." , 
						 	"2° Verificar se o recipiente de grãos de café está aberto.",
							"3° Verificar se os grãos de café não acabaram.",
							"4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
					]
				},
			 {  
					"id": 9,
					"name": "9B",
					"problems": [
							"O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
					],
					"resolves": [
							"1° Verificar o funcionamento do moedor." , 
							"2° Verificar se o recipiente de grãos de café está aberto.",
					 		"3° Verificar se os grãos de café não acabaram.",
					 		"4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
			 ]
				},
			 {  
					"id": 10,
					"name": "9C",
					"problems": [
							"O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
					],
					"resolves": [
							"1° Verificar o funcionamento do moedor." , 
							"2° Verificar se o recipiente de grãos de café está aberto.",
						 "3° Verificar se os grãos de café não acabaram.",
						 "4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
				]
				},
			 {
					"id": 11,
					"name": "17A, B ou C",
					"problems": [ 
							"Tecla pressionada por muito tempo ou travada no acionamento.",
					],
					"resolves": [
							"1° Reinicie o equipamento", 
							"2° Botão em curto, verificar se há algo na parte interna da porta ou subtituir a parte danificada.", 
					],
				},
			 {  
					"id": 12,
					"name": "24A",
					"problems": [
							"O valor de tensão real de 24 V cc é maior do que o valor tolerado.",
					],
					"resolves": [
							"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
					],
				},
			 {
					"id": 13,
					"name": "24B",
					"problems": [ 
							"O valor de tensão de 24 V cc medido está abaixo do limiar admitido ou totalmente ausente, por exemplo, porque um fusível disparou; descubra e remova as causas deste erro antes de ligar novamente a máquina.",
					],
					"resolves": [
							"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
					],
				},
			 {
					"id": 14,
					"name": "31A",
					"problems": [ 
							"A temperatura da água da caldeira de pressão é superior ao valor programado;.",
					],
					"resolves": [
							"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
					],
				},
			 {
					"id": 15,
					"name": "31B",
					"problems": [ 
							"A água não consegue atingir a temperatura definida.",
					],
					"resolves": [
							"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
					],
				},
			 {
					"id": 16,
					"name": "31H",
					"problems": [ 
							"Nenhuma corrente no transdutor indutivo.",
					],
					"resolves": [
							"1° Verifique o status de cliques de proteção.",
							"2° Verifique o funcionamento da placa de indução e a fiação relacionada.", 					 
					],
				},
			 {
					"id": 17,
					"name": "31V",
					"problems": [ 
							"1° Não há tensão no Vareterm.",
							"2° Sonda de temperatura com defeito.",
					],
					"resolves": [
							"1° Verificar cabos de alimentação do vareterm com a placa fonte.",
							"2° Verificar conexão dos cabos da sonda de temperatura ou substituir a mesma.",  
					],
				},
			 {
					"id": 18,
					"name": "33A",
					"problems": [ 
							"A temperatura da água da caldeira é superior ao valor configurado.",
					],
					"resolves": [
							"Verifique o funcionamento da placa da CPU/de potência e sonda de temperatura.", 
					],
				},
			 {
					"id": 19,
					"name": "33B",
					"problems": [ 
							"A água da caldeira não conseguiu alcançar a temperatura programada.",
					],
					"resolves": [
							"1° Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.",
							"2° Verifique a funcionalidade do elemento de aquecimento e o status de cliques de proteção.",
							"3° Verifique o funcionamento da sonda de temperatura e a fiação relacionada.", 
					],
				},
			],			
    },
 {
      "id": 7,
      "description": "Exclusividade :Máquina italiana da mais alta qualidade, com o novo café 100% arábica torrado e moido na hora. Rendimento: Consumo total de seus insumos, sem descarte ou desperdício. Eficiência: Muito mais agilidade no preparo Economia: Não tem caldeira, por isso consome 90% menos energia que as máquinas do mercado. Máquinas em comodato e assistência técnica gratuita. Marcas Exclusivas: Uma perfeita solução com 12 opções de bebidas, todas com marcas que só a Nestlé pode oferecer",
      "name": "MTS60E",
      "height": "66,6 cm",
      "image": 'MTS60E',
      "width": "42,2 cm",
      "deep": "59,9 cm",
      "weight": "35,2 Kg",
      "potency": "3000W",
      "tension": "220V",
      "revenues": [
          {
              "title": "H",
              "src": "HMTS60E"
          },
          {
              "title": "H Menu 2",
              "src": "HMenu2MTS60E"
          },
          {
              "title": "F",
              "src": "FMTS60E"
          },
          {
              "title": "I",
              "src": "IMTS60E"
          },
          {
              "title": "G",
              "src": "GMTS60E"
          },
          {
              "title": "J",
              "src": "JMTS60E"
          },
          {
              "title": "K",
              "src": "KMTS60E"
          },
          {
              "title": "C009",
              "src": "C009GPA"
          },
          {
              "title": "C009 Menu 2",
              "src": "C009GPAMenu2"
          },
          {
              "title": "C010",
              "src": "C010Minuto"
          }
		  	],
		 "issues": [
				{
					 "id": 0,
					 "name": "off 3",
					 "problems": [ 
							 "Bandeja de resíduos cheia.",
					 ],
					 "resolves": [
							 "Esvazie a bandeja, verifique se sensor da bandeja está seco e reinicie o equipamento.", 
					 ],
				 },
				{
					 "id": 1,
					 "name": "off 6A",
					 "problems": [
							 "Falta de água: Tempo de enchimento da caldeira instantânea muito longo, o fornecimento de água pode estar totalmente escasso e sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água.",
					 ],
					 "resolves": [
								"1° Verifique se há água no PDV.", 
								"2° Verifique o fluxo de água, após o filtro.", 
								"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.", 
					 ]
				 },
				{  
					 "id": 2,
					 "name": "off 6B",
					 "problems": [
							 "O circuito da caldeira instantânea foi reabastecido com água, mas nenhuma bebida foi servida; o circuito de alimentação pode ter um vazamento.",
					 ],
					 "resolves": [
								"1° Verifique se há água no PDV." , 
								"2° Verifique o fluxo de água, após o filtro.",
								"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
					 ]
				 },
				{  
					 "id": 3,
					 "name": "off 6C",
					 "problems": [
							 "Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;",
					 ],
					 "resolves": [
								"1° Verifique se há água no PDV." , 
								"2° Verifique o fluxo de água, após o filtro.",
								"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
					 ]
				 },
				{  
					 "id": 4,
					 "name": "7R",
					 "problems": [
							 "Erro na fase de recirculação da água.",
					 ],
					 "resolves": [
								"Verifique o funcionamento da solenoide de recirculação e o contador volumétrico." , 
					 ]
				 },
				{  
					 "id": 5,
					 "name": "8A",
					 "problems": [
							 "1° O Vareflex não conseguiu girar adequadamente; o microinterruptor que controla a rotação do Vareflex não está funcionando adequadamente, não está conectado ou mal posicionado.", 
							 "2° Motor de infusão não funciona ou não está conectado; durante o ciclo de reinicialização ou de partida, os pulsos do codificador não são detectados pela CPU.",
				],
					 "resolves": [
								"1° Verifique o funcionamento e a posição do microinterruptor.", 
							 "2° Verifique o funcionamento do grupo infusor, ele deve se mover livremente.",
							 "3° Verifique os componentes do grupo motorredutor: motor, polias, correia.",
							 "4° Verifique a placa do codificador, a placa da CPU e a fiação.",
					 ]
				 },
				{  
					 "id": 6,
					 "name": "8B",
					 "problems": [
							 "1° A máquina não reconhece a presença do Vareflex na sua posição de trabalho correta; verifique o microinterruptor de presença.",
							 "2° A pressão exercida na câmara não é suficiente para servir espresso; a dose do produto moído na câmara de infusão pode ser muito pequena.",
							 "3° Durante o ciclo de reinicialização ou de partida, o microinterruptor de controle não está pressionado ou não está funcionando, o infusor não está presente.",
					 ],
					 "resolves": [
								"1° Verifique o funcionamento do microinterruptor." , 
								"2° Verifique a dose do produto moído na câmara de infusão.",
								"3° Verifique se o grupo está bem instalado, ou o funcionamento do microinterruptor.",
					 ]
				 },
				{  
					 "id": 7,
					 "name": "8C",
					 "problems": [
							 "1° O pistão superior não está se movendo adequadamente.",
							 "2° A pressão exercida na câmara não é suficiente para servir espresso; a dose do produto moído na câmara de infusão pode ser muito pequena.",
							 "3° Durante o ciclo de reinicialização ou de partida, enquanto a câmara de infusão da cafeteira estiver se movendo para cima, o limite de consumo atual é atingido cedo demais.",
					 ],
					 "resolves": [
								"1° Verifique se há água no PDV" , 
								"2° Verifique o fluxo de água, após o filtro.",
								"3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
					 ]
				 },
				{  
					 "id": 8,
					 "name": "9A",
					 "problems": [
							 "O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
				 ],
					 "resolves": [
								"1° Verificar o funcionamento do moedor." , 
								"2° Verificar se o recipiente de grãos de café está aberto.",
							 "3° Verificar se os grãos de café não acabaram.",
							 "4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
					 ]
				 },
				{  
					 "id": 9,
					 "name": "9B",
					 "problems": [
							 "O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
					 ],
					 "resolves": [
							 "1° Verificar o funcionamento do moedor." , 
							 "2° Verificar se o recipiente de grãos de café está aberto.",
								"3° Verificar se os grãos de café não acabaram.",
								"4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
				]
				 },
				{  
					 "id": 10,
					 "name": "9C",
					 "problems": [
							 "O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
					 ],
					 "resolves": [
							 "1° Verificar o funcionamento do moedor." , 
							 "2° Verificar se o recipiente de grãos de café está aberto.",
							"3° Verificar se os grãos de café não acabaram.",
							"4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
				 ]
				 },
				{
					 "id": 11,
					 "name": "17A, B ou C",
					 "problems": [ 
							 "Tecla pressionada por muito tempo ou travada no acionamento.",
					 ],
					 "resolves": [
							 "1° Reinicie o equipamento", 
							 "2° Botão em curto, verificar se há algo na parte interna da porta ou subtituir a parte danificada.", 
					 ],
				 },
				{  
					 "id": 12,
					 "name": "24A",
					 "problems": [
							 "O valor de tensão real de 24 V cc é maior do que o valor tolerado.",
					 ],
					 "resolves": [
							 "Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
					 ],
				 },
				{
					 "id": 13,
					 "name": "24B",
					 "problems": [ 
							 "O valor de tensão de 24 V cc medido está abaixo do limiar admitido ou totalmente ausente, por exemplo, porque um fusível disparou; descubra e remova as causas deste erro antes de ligar novamente a máquina.",
					 ],
					 "resolves": [
							 "Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
					 ],
				 },
				{
					 "id": 14,
					 "name": "31A",
					 "problems": [ 
							 "A temperatura da água da caldeira de pressão é superior ao valor programado;.",
					 ],
					 "resolves": [
							 "Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
					 ],
				 },
				{
					 "id": 15,
					 "name": "31B",
					 "problems": [ 
							 "A água não consegue atingir a temperatura definida.",
					 ],
					 "resolves": [
							 "Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
					 ],
				 },
				{
					 "id": 16,
					 "name": "31H",
					 "problems": [ 
							 "Nenhuma corrente no transdutor indutivo.",
					 ],
					 "resolves": [
							 "1° Verifique o status de cliques de proteção.",
							 "2° Verifique o funcionamento da placa de indução e a fiação relacionada.", 					 
					 ],
				 },
				{
					 "id": 17,
					 "name": "31V",
					 "problems": [ 
							 "1° Não há tensão no Vareterm.",
							 "2° Sonda de temperatura com defeito.",
					 ],
					 "resolves": [
							 "1° Verificar cabos de alimentação do vareterm com a placa fonte.",
							 "2° Verificar conexão dos cabos da sonda de temperatura ou substituir a mesma.",  
					 ],
				 },
				{
					  "id": 18,
					  "name": "33A",
					  "problems": [ 
							 "A temperatura da água da caldeira é superior ao valor configurado.",
					  ],
					  "resolves": [
							 "Verifique o funcionamento da placa da CPU/de potência e sonda de temperatura.", 
					  ],
				  },
			 {
					"id": 19,
					"name": "33B",
					"problems": [ 
								"A água da caldeira não conseguiu alcançar a temperatura programada.",
					],
					 "resolves": [
								"1° Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.",
								"2° Verifique a funcionalidade do elemento de aquecimento e o status de cliques de proteção.",
								"3° Verifique o funcionamento da sonda de temperatura e a fiação relacionada.", 
					],
				},
			],			
    },
 { 
      "id": 8,
      "description": "NESCAFÉ® Alegria - A maior variedade de cappuccinos e achocolatados para esquentar o seu negócio! Conheça essa solução completa, que entrega produtos de qualidade com marcas conhecidas e oferece ao seu negócio praticidade e padronização.",
      "name": "FTP60E",
      "height": "67,2 cm",
      "image": 'FTP60E',
      "width": "42,2 cm",
      "deep": "56,8 cm",
      "weight": "36,0 Kg",
      "potency": "3000W",
      "tension": "220V",
      "revenues": [
          {
              "title": "AI 140ml",
              "src": "AI140ml"
          },
          {
              "title": "AI 90ml",
              "src": "AI90ml"
          },
          {
              "title": "C001",
              "src": "C001"
          }
			  ],
		 "issues": [
			{
				"id": 0,
				"name": "off 3",
				"problems": [ 
						"Bandeja de resíduos cheia.",
				],
				"resolves": [
						"Esvazie a bandeja, verifique se sensor da bandeja está seco e reinicie o equipamento.", 
				],
			},
		 {
				"id": 1,
				"name": "off 6A",
				"problems": [
						"Falta de água: Tempo de enchimento da caldeira instantânea muito longo, o fornecimento de água pode estar totalmente escasso e sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água.",
				],
				"resolves": [
						 "1° Verifique se há água no PDV.", 
						 "2° Verifique o fluxo de água, após o filtro.", 
						 "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.", 
				]
			},
		 {  
				"id": 2,
				"name": "off 6B",
				"problems": [
						"O circuito da caldeira instantânea foi reabastecido com água, mas nenhuma bebida foi servida; o circuito de alimentação pode ter um vazamento.",
				],
				"resolves": [
						 "1° Verifique se há água no PDV." , 
						 "2° Verifique o fluxo de água, após o filtro.",
						 "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				]
			},
		 {  
				"id": 3,
				"name": "off 6C",
				"problems": [
						"Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;",
				],
				"resolves": [
						 "1° Verifique se há água no PDV." , 
						 "2° Verifique o fluxo de água, após o filtro.",
						 "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				]
			},
		 {  
				"id": 4,
				"name": "7R",
				"problems": [
						"Erro na fase de recirculação da água.",
				],
				"resolves": [
						 "Verifique o funcionamento da solenoide de recirculação e o contador volumétrico." , 
				]
			},
		 {  
				"id": 5,
				"name": "8A",
				"problems": [
						"1° O Vareflex não conseguiu girar adequadamente; o microinterruptor que controla a rotação do Vareflex não está funcionando adequadamente, não está conectado ou mal posicionado.", 
						"2° Motor de infusão não funciona ou não está conectado; durante o ciclo de reinicialização ou de partida, os pulsos do codificador não são detectados pela CPU.",
		 ],
				"resolves": [
						 "1° Verifique o funcionamento e a posição do microinterruptor.", 
						"2° Verifique o funcionamento do grupo infusor, ele deve se mover livremente.",
						"3° Verifique os componentes do grupo motorredutor: motor, polias, correia.",
						"4° Verifique a placa do codificador, a placa da CPU e a fiação.",
				]
			},
		 {  
				"id": 6,
				"name": "8B",
				"problems": [
						"1° A máquina não reconhece a presença do Vareflex na sua posição de trabalho correta; verifique o microinterruptor de presença.",
						"2° A pressão exercida na câmara não é suficiente para servir espresso; a dose do produto moído na câmara de infusão pode ser muito pequena.",
						"3° Durante o ciclo de reinicialização ou de partida, o microinterruptor de controle não está pressionado ou não está funcionando, o infusor não está presente.",
				],
				"resolves": [
						 "1° Verifique o funcionamento do microinterruptor." , 
						 "2° Verifique a dose do produto moído na câmara de infusão.",
						 "3° Verifique se o grupo está bem instalado, ou o funcionamento do microinterruptor.",
				]
			},
		 {  
				"id": 7,
				"name": "8C",
				"problems": [
						"1° O pistão superior não está se movendo adequadamente.",
						"2° A pressão exercida na câmara não é suficiente para servir espresso; a dose do produto moído na câmara de infusão pode ser muito pequena.",
						"3° Durante o ciclo de reinicialização ou de partida, enquanto a câmara de infusão da cafeteira estiver se movendo para cima, o limite de consumo atual é atingido cedo demais.",
				],
				"resolves": [
						 "1° Verifique se há água no PDV" , 
						 "2° Verifique o fluxo de água, após o filtro.",
						 "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				]
			},
		 {  
				"id": 8,
				"name": "9A",
				"problems": [
						"O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
			],
				"resolves": [
						 "1° Verificar o funcionamento do moedor." , 
						 "2° Verificar se o recipiente de grãos de café está aberto.",
						"3° Verificar se os grãos de café não acabaram.",
						"4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
				]
			},
		 {  
				"id": 9,
				"name": "9B",
				"problems": [
						"O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
				],
				"resolves": [
						"1° Verificar o funcionamento do moedor." , 
						"2° Verificar se o recipiente de grãos de café está aberto.",
						 "3° Verificar se os grãos de café não acabaram.",
						 "4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
		 ]
			},
		 {  
				"id": 10,
				"name": "9C",
				"problems": [
						"O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
				],
				"resolves": [
						"1° Verificar o funcionamento do moedor." , 
						"2° Verificar se o recipiente de grãos de café está aberto.",
					 	"3° Verificar se os grãos de café não acabaram.",
					 	"4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
			]
			},
		 {
				"id": 11,
				"name": "17A, B ou C",
				"problems": [ 
						"Tecla pressionada por muito tempo ou travada no acionamento.",
				],
				"resolves": [
						"1° Reinicie o equipamento", 
						"2° Botão em curto, verificar se há algo na parte interna da porta ou subtituir a parte danificada.", 
				],
			},
		 {  
				"id": 12,
				"name": "24A",
				"problems": [
						"O valor de tensão real de 24 V cc é maior do que o valor tolerado.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 13,
				"name": "24B",
				"problems": [ 
						"O valor de tensão de 24 V cc medido está abaixo do limiar admitido ou totalmente ausente, por exemplo, porque um fusível disparou; descubra e remova as causas deste erro antes de ligar novamente a máquina.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 14,
				"name": "31A",
				"problems": [ 
						"A temperatura da água da caldeira de pressão é superior ao valor programado;.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {
				"id": 15,
				"name": "31B",
				"problems": [ 
						"A água não consegue atingir a temperatura definida.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {
				"id": 16,
				"name": "31H",
				"problems": [ 
						"Nenhuma corrente no transdutor indutivo.",
				],
				"resolves": [
						"1° Verifique o status de cliques de proteção.",
						"2° Verifique o funcionamento da placa de indução e a fiação relacionada.", 					 
				],
			},
		 {
				"id": 17,
				"name": "31V",
				"problems": [ 
						"1° Não há tensão no Vareterm.",
						"2° Sonda de temperatura com defeito.",
				],
				"resolves": [
						"1° Verificar cabos de alimentação do vareterm com a placa fonte.",
						"2° Verificar conexão dos cabos da sonda de temperatura ou substituir a mesma.",  
				],
			},
		 {
				"id": 18,
				"name": "33A",
				"problems": [ 
						"A temperatura da água da caldeira é superior ao valor configurado.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e sonda de temperatura.", 
				],
			},
		 {
			 "id": 19,
			 "name": "33B",
			 "problems": [ 
						"A água da caldeira não conseguiu alcançar a temperatura programada.",
			  ],
				"resolves": [
						"1° Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.",
						"2° Verifique a funcionalidade do elemento de aquecimento e o status de cliques de proteção.",
						"3° Verifique o funcionamento da sonda de temperatura e a fiação relacionada.", 
				],
		  },
	  ],			
  },
 {
      "id": 9,
      "description": "NESCAFÉ – A bebida premium perfeita para aqueles momentos especiais. Surpreenda-se com NESCAFÉ® Milano, uma solução que entrega bebidas premium em poucos segundos, com padronização e qualidade garantidas.",
      "name": "FTS60E",
      "height": "67,2 cm",
      "image": 'FTS60E',
      "width": "42,2 cm",
      "deep": "56,8 cm",
      "weight": "36,0 Kg",
      "potency": "3000W",
      "tension": "220V",
      "revenues": [
          {
              "title": "H",
              "src": "HMTS60E"
          },
          {
              "title": "H Menu 2",
              "src": "HMenu2MTS60E"
          },
          {
              "title": "F",
              "src": "FMTS60E"
          },
          {
              "title": "I",
              "src": "IMTS60E"
          },
          {
              "title": "G",
              "src": "GMTS60E"
          },
          {
              "title": "J",
              "src": "JMTS60E"
          },
          {
              "title": "K",
              "src": "KMTS60E"
          },
          {
              "title": "C009",
              "src": "C009GPA"
          },
          {
              "title": "C009 Menu 2",
              "src": "C009GPAMenu2"
          },
          {
              "title": "C010",
              "src": "C010Minuto"
          },
			  ],
		 "issues": [
			{
				"id": 0,
				"name": "off 3",
				"problems": [ 
						"Bandeja de resíduos cheia.",
				],
				"resolves": [
						"Esvazie a bandeja, verifique se sensor da bandeja está seco e reinicie o equipamento.", 
				],
			},
		 {
				"id": 1,
				"name": "off 6A",
				"problems": [
						"Falta de água: Tempo de enchimento da caldeira instantânea muito longo, o fornecimento de água pode estar totalmente escasso e sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água.",
				],
				"resolves": [
						 "1° Verifique se há água no PDV.", 
						 "2° Verifique o fluxo de água, após o filtro.", 
						 "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.", 
				]
			},
		 {  
				"id": 2,
				"name": "off 6B",
				"problems": [
						"O circuito da caldeira instantânea foi reabastecido com água, mas nenhuma bebida foi servida; o circuito de alimentação pode ter um vazamento.",
				],
				"resolves": [
						 "1° Verifique se há água no PDV." , 
						 "2° Verifique o fluxo de água, após o filtro.",
						 "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				]
			},
		 {  
				"id": 3,
				"name": "off 6C",
				"problems": [
						"Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;",
				],
				"resolves": [
						 "1° Verifique se há água no PDV." , 
						 "2° Verifique o fluxo de água, após o filtro.",
						 "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				]
			},
		 {  
				"id": 4,
				"name": "7R",
				"problems": [
						"Erro na fase de recirculação da água.",
				],
				"resolves": [
						 "Verifique o funcionamento da solenoide de recirculação e o contador volumétrico." , 
				]
			},
		 {  
				"id": 5,
				"name": "8A",
				"problems": [
						"1° O Vareflex não conseguiu girar adequadamente; o microinterruptor que controla a rotação do Vareflex não está funcionando adequadamente, não está conectado ou mal posicionado.", 
						"2° Motor de infusão não funciona ou não está conectado; durante o ciclo de reinicialização ou de partida, os pulsos do codificador não são detectados pela CPU.",
		 ],
				"resolves": [
						 "1° Verifique o funcionamento e a posição do microinterruptor.", 
						"2° Verifique o funcionamento do grupo infusor, ele deve se mover livremente.",
						"3° Verifique os componentes do grupo motorredutor: motor, polias, correia.",
						"4° Verifique a placa do codificador, a placa da CPU e a fiação.",
				]
			},
		 {  
				"id": 6,
				"name": "8B",
				"problems": [
						"1° A máquina não reconhece a presença do Vareflex na sua posição de trabalho correta; verifique o microinterruptor de presença.",
						"2° A pressão exercida na câmara não é suficiente para servir espresso; a dose do produto moído na câmara de infusão pode ser muito pequena.",
						"3° Durante o ciclo de reinicialização ou de partida, o microinterruptor de controle não está pressionado ou não está funcionando, o infusor não está presente.",
				],
				"resolves": [
						 "1° Verifique o funcionamento do microinterruptor." , 
						 "2° Verifique a dose do produto moído na câmara de infusão.",
						 "3° Verifique se o grupo está bem instalado, ou o funcionamento do microinterruptor.",
				]
			},
		 {  
				"id": 7,
				"name": "8C",
				"problems": [
						"1° O pistão superior não está se movendo adequadamente.",
						"2° A pressão exercida na câmara não é suficiente para servir espresso; a dose do produto moído na câmara de infusão pode ser muito pequena.",
						"3° Durante o ciclo de reinicialização ou de partida, enquanto a câmara de infusão da cafeteira estiver se movendo para cima, o limite de consumo atual é atingido cedo demais.",
				],
				"resolves": [
						 "1° Verifique se há água no PDV" , 
						 "2° Verifique o fluxo de água, após o filtro.",
						 "3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.",
				]
			},
		 {  
				"id": 8,
				"name": "9A",
				"problems": [
						"O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
			],
				"resolves": [
						 "1° Verificar o funcionamento do moedor." , 
						 "2° Verificar se o recipiente de grãos de café está aberto.",
						"3° Verificar se os grãos de café não acabaram.",
						"4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
				]
			},
		 {  
				"id": 9,
				"name": "9B",
				"problems": [
						"O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
				],
				"resolves": [
						"1° Verificar o funcionamento do moedor." , 
						"2° Verificar se o recipiente de grãos de café está aberto.",
						 "3° Verificar se os grãos de café não acabaram.",
						 "4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
		 ]
			},
		 {  
				"id": 10,
				"name": "9C",
				"problems": [
						"O tempo máximo de moagem foi excedido; o café moído não está enchendo a câmara dosadora (o microinterruptor de controle não alterou seu status); VARIFLEX: a câmara de infusão estava vazia.",
				],
				"resolves": [
						"1° Verificar o funcionamento do moedor." , 
						"2° Verificar se o recipiente de grãos de café está aberto.",
					 "3° Verificar se os grãos de café não acabaram.",
					 "4° Se a cupula do café estiver abastecida e o moedor não moer, mas o eixo girar em falso, verificar o pino de segurança no centro do eixo." 
			]
			},
		 {
				"id": 11,
				"name": "17A, B ou C",
				"problems": [ 
						"Tecla pressionada por muito tempo ou travada no acionamento.",
				],
				"resolves": [
						"1° Reinicie o equipamento", 
						"2° Botão em curto, verificar se há algo na parte interna da porta ou subtituir a parte danificada.", 
				],
			},
		 {  
				"id": 12,
				"name": "24A",
				"problems": [
						"O valor de tensão real de 24 V cc é maior do que o valor tolerado.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 13,
				"name": "24B",
				"problems": [ 
						"O valor de tensão de 24 V cc medido está abaixo do limiar admitido ou totalmente ausente, por exemplo, porque um fusível disparou; descubra e remova as causas deste erro antes de ligar novamente a máquina.",
				],
				"resolves": [
						"Verifique a fonte de alimentação; ou se necessário para substituir os componentes elétricos/eletrônicos envolvidos: motor da caldeira(somente equipamento solúvel), produto, misturador e eletrovalvula, podem estar em curto ou travados. / Placa CPU.", 
				],
			},
		 {
				"id": 14,
				"name": "31A",
				"problems": [ 
						"A temperatura da água da caldeira de pressão é superior ao valor programado;.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {
				"id": 15,
				"name": "31B",
				"problems": [ 
						"A água não consegue atingir a temperatura definida.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.", 
				],
			},
		 {
				"id": 16,
				"name": "31H",
				"problems": [ 
						"Nenhuma corrente no transdutor indutivo.",
				],
				"resolves": [
						"1° Verifique o status de cliques de proteção.",
						"2° Verifique o funcionamento da placa de indução e a fiação relacionada.", 					 
				],
			},
		 {
				"id": 17,
				"name": "31V",
				"problems": [ 
						"1° Não há tensão no Vareterm.",
						"2° Sonda de temperatura com defeito.",
				],
				"resolves": [
						"1° Verificar cabos de alimentação do vareterm com a placa fonte.",
						"2° Verificar conexão dos cabos da sonda de temperatura ou substituir a mesma.",  
				],
			},
		 {
				"id": 18,
				"name": "33A",
				"problems": [ 
						"A temperatura da água da caldeira é superior ao valor configurado.",
				],
				"resolves": [
						"Verifique o funcionamento da placa da CPU/de potência e sonda de temperatura.", 
				],
			},
		 {
			 "id": 19,
			 "name": "33B",
			 "problems": [ 
						"A água da caldeira não conseguiu alcançar a temperatura programada.",
			  ],
				"resolves": [
						"1° Verifique o funcionamento da placa da CPU/de potência e da sonda de temperatura.",
						"2° Verifique a funcionalidade do elemento de aquecimento e o status de cliques de proteção.",
						"3° Verifique o funcionamento da sonda de temperatura e a fiação relacionada.", 
				],
		  },
	  ],			
  },
]

export default EquipmentsMock
