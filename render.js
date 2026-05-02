const Render = {

  all(){
    this.financeiro();
    this.dashboard();
    this.agenda();
  },

  financeiro(){
    const lista = document.getElementById('listaFinanceiro');
    lista.innerHTML = '';

    Store.financeiro.forEach(item => {
      lista.innerHTML += `
        <div class="card">
          ${item.desc} - R$ ${item.valor.toFixed(2)}
        </div>`;
    });
  },

  dashboard(){
    const total = Store.financeiro
      .reduce((acc, item)=> acc + item.valor, 0);

    document.getElementById('dashResumo').innerHTML =
      `Total: R$ ${total.toFixed(2)}`;
  },

  agenda(){
    const {mes, ano} = Store.agenda;
    const dias = new Date(ano, mes+1, 0).getDate();

    document.getElementById('mesAtual').innerText =
      `${mes+1}/${ano}`;

    let html = '';
    for(let i=1;i<=dias;i++){
      html += `<div class="card">${i}</div>`;
    }

    document.getElementById('calendario').innerHTML = html;
  }

};
