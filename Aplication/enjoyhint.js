//initialize instance
var enjoyhint_instance = new EnjoyHint({});

//simple config. 
//Only one step - highlighting(with description) "New" button 
//hide EnjoyHint after a click on the button.
var enjoyhint_script_steps = [
  {
    'click .transactionEnjoy' : 'Clique em nova transação.'
  } , 
  {
    'click .descriptionEnjoy' : 'Agora coloque uma descrição para à movimentação.'
  }  ,
  {
    'click .valueEnjoy' : 'Digite um valor, caso o mesmo seja uma despesa, coloque o "-" (negativo) na frente.'
  }  ,
  {
    'click .dateEnjoy' : 'Agora coloque a data da movimentação'
  }  ,
  {
    'click .btnsaveEnjoy' : 'Por último clique em salvar.'
  } , 
  {
    'click .cancel' : 'Pronto! basta apenas fechar para voltar à tela anterior.'
  }  
];

//set script config
enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
enjoyhint_instance.run();