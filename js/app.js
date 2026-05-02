window.onerror = function(msg){
  console.error("Erro:", msg);
};

Render.all();<script>

/* =========================
   STORE GLOBAL (ESSENCIAL)
========================= */
const Financeiro = {

  add(){
    const desc = document.getElementById('desc').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if(!desc || isNaN(valor)) return;

    Store.financeiro.push({desc, valor});

    document.getElementById('desc').value = '';
    document.getElementById('valor').value = '';

    Render.financeiro();
  }

};
const Store = {
  financeiro: [],
  agenda: {
    mes: new Date().getMonth(),
    ano: new Date().getFullYear()
  }
};

/* =========================
   UI CONTROL
========================= */
const UI = {
  show(id){
    document.querySelectorAll('.panel')
      .forEach(p => p.classList.remove('active'));

    document.getElementById(id).classList.add('active');

    Render.all();
  }
};

/* =========================
   FINANCEIRO
========================= */
const Financeiro = {

  add(){
    const desc = document.getElementById('desc').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if(!desc || isNaN(valor)) return;

    Store.financeiro.push({desc, valor});

    document.getElementById('desc').value = '';
    document.getElementById('valor').value = '';

    Render.financeiro();
  }

};

/* =========================
   AGENDA
========================= const Agenda = {

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
*/
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

/* =========================
   RENDER (SEPARADO)
========================= */
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
          ${item.desc} - R$ ${item.valor}
        </div>
      `;
    });
  },

  dashboard(){
    const total = Store.financeiro
      .reduce((acc, item)=> acc + item.valor, 0);

    document.getElementById('dashResumo').innerHTML =
      `Total: R$ ${total}`;
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

/* =========================
   ERROR HANDLER GLOBAL
========================= */
window.onerror = function(msg){
  console.error("Erro global:", msg);
};

/* INIT */
Render.all();

</script>
</body>
</html>
