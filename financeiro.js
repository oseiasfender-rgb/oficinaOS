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
