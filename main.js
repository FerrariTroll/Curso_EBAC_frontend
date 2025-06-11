$(document).ready(function() {
    $('form').on('submit' , function (e) {
        e.preventDefault();

        const tarefa = $('#nomeTarefas').val();

        if (tarefa !=='') {
            $('#minhaLista').append(`<li>${tarefa}</li>`);
            $('#nomeTarefas').val('');
        }

    })
     $('#minhaLista').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
})

