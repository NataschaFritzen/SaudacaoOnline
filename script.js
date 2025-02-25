function mostrarSaudacao() {
    const nome = document.getElementById('nome').value;
    const hora = parseInt(document.getElementById('hora').value, 10);
    const mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = saudacaoPersonalizada(nome,hora);
}

function saudacaoPersonalizada(nome, hora) 
{
    if (hora < 12) 
    {
        return "Bom dia, " + nome + "!";
    }

    else if (hora >= 12 && hora < 18)
    {
        return "Boa tarde, " + nome + "!";
    }
    
    else if (hora > 18) 
    {
        return "Boa noite, " + nome + "!";
    }
    else
    {
        return "";
    }

}