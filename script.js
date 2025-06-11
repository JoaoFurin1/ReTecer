// Cadastro de pontos de coleta
const formColeta = document.getElementById('formColeta');
const listaColeta = document.getElementById('listaColeta');

formColeta.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = formColeta.nome.value.trim();
  const endereco = formColeta.endereco.value.trim();
  const contato = formColeta.contato.value.trim();

  if (nome && endereco && contato) {
    const item = document.createElement('p');
    item.textContent = `📍 ${nome} - ${endereco} (Contato: ${contato})`;
    listaColeta.appendChild(item);

    formColeta.reset();
    alert('Ponto de coleta cadastrado com sucesso!');
  }
});

// Formulário de interesse e feedback
const formFeedback = document.getElementById('formFeedback');
const respostaFeedback = document.getElementById('respostaFeedback');

formFeedback.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = formFeedback.nomeFeedback.value.trim();
  const email = formFeedback.emailFeedback.value.trim();
  const mensagem = formFeedback.mensagem.value.trim();

  if (nome && email && mensagem) {
    respostaFeedback.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
    formFeedback.reset();
  }
});
