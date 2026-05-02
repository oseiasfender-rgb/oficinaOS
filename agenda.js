const Agenda = {

  next(){
    Store.agenda.mes++;
    if(Store.agenda.mes > 11){
      Store.agenda.mes = 0;
      Store.agenda.ano++;
    }
    Render.agenda();
  },

  prev(){
    Store.agenda.mes--;
    if(Store.agenda.mes < 0){
      Store.agenda.mes = 11;
      Store.agenda.ano--;
    }
    Render.agenda();
  }

};
