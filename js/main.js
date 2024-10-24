import ui from './ui.js';
import api from './api.js'

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarPensamentos();
    const conteudo = document.getElementById('pensamento-conteudo');
    const autoria = document.getElementById('pensamento-autoria');

    const formularioPensamento = document.getElementById('pensamento-form');
    const formularioCancelar = document.getElementById('botao-cancelar');

    formularioPensamento.addEventListener('submit', manipularSubmissaoFormulario);
    formularioCancelar.addEventListener('click', () => {
        conteudo.value = '';
        autoria.value = '';
    })
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById('pensamento-id').value;
    const conteudo = document.getElementById('pensamento-conteudo').value;
    const autoria = document.getElementById('pensamento-autoria').value;

    try {
        if(id) {
            await api.editarPensamento({id, conteudo, autoria})
        } else {
            await api.salvarPensamento({conteudo, autoria})
        }
        ui.renderizarPensamentos();
    } 
    catch {
        alert('Erro ao salvar pensamento');
    }
}