// Exemplo de função simples para o botão
function saibaMais() {
    alert("Redirecionando para o material completo da lição!");
}

// Filtro simples de pesquisa (esboço)
document.getElementById('searchInput').addEventListener('keyup', function() {
    let valor = this.value.toLowerCase();
    console.log("Buscando por: " + valor);
    // Aqui você adicionaria a lógica para filtrar cards na página
});
