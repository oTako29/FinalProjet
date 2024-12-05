const freelancers = [
    { nome: "João Silva", regiao: "Norte", nota: 5, genero: "masculino", idade: 30, preco: 50 },
    { nome: "Maria Oliveira", regiao: "Sul", nota: 4, genero: "feminino", idade: 28, preco: 40 },
    { nome: "Carlos Pereira", regiao: "Leste", nota: 3, genero: "masculino", idade: 35, preco: 30 },
    { nome: "Ana Santos", regiao: "Oeste", nota: 5, genero: "feminino", idade: 25, preco: 60 },
    { nome: "Pedro Gomes", regiao: "Norte", nota: 4, genero: "masculino", idade: 40, preco: 55 }
];

function filtrarFreelancers() {
    const regiao = document.getElementById("regiao").value;
    const nota = document.getElementById("nota").value;
    const genero = document.getElementById("genero").value;
    const idadeMin = parseInt(document.getElementById("idade").value) || 0;
    const precoMax = parseInt(document.getElementById("preco").value) || Infinity;

    const filteredFreelancers = freelancers.filter(freelancer => {
        return (regiao === "todas" || freelancer.regiao === regiao) &&
               (nota === "todas" || freelancer.nota.toString() === nota) &&
               (genero === "todos" || freelancer.genero === genero) &&
               (freelancer.idade >= idadeMin) &&
               (freelancer.preco <= precoMax);
    });

    mostrarFreelancers(filteredFreelancers);
}

function mostrarFreelancers(freelancers) {
    const list = document.getElementById("list");
    list.innerHTML = ""; // Limpa a lista atual

    if (freelancers.length === 0) {
        list.innerHTML = "<li>Nenhum freelancer encontrado.</li>";
        return;
    }

    freelancers.forEach(freelancer => {
        const li = document.createElement("li");
        li.textContent = `${freelancer.nome} - Região: ${freelancer.regiao}, Nota: ${freelancer.nota}, Gênero: ${freelancer.genero}, Idade: ${freelancer.idade}, Preço: R$${freelancer.preco}`;
        list.appendChild(li);
    });
}

// Exibir todos os freelancers ao carregar a página
document.addEventListener("DOMContentLoaded", mostrarFreelancers(freelancers));

function mostrarFreelancers(freelancers) {
    const list = document.getElementById("list");
    list.innerHTML = ""; // Limpa a lista atual

    if (freelancers.length === 0) {
        list.innerHTML = "<li>Nenhum freelancer encontrado.</li>";
        return;
    }

    freelancers.forEach(freelancer => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fas fa-user" style="margin-right: 10px;"></i>${freelancer.nome} - Região: ${freelancer.regiao}, Nota: ${freelancer.nota}, Gênero: ${freelancer.genero}, Idade: ${freelancer.idade}, Preço: R$${freelancer.preco}`;
        list.appendChild(li);
    });
}
function mostrarFreelancers(freelancers) {
    const list = document.getElementById("list");
    list.innerHTML = ""; // Limpa a lista atual

    if (freelancers.length === 0) {
        list.innerHTML = "<li>Nenhum freelancer encontrado.</li>";
        return;
    }

    freelancers.forEach(freelancer => {
        const li = document.createElement("li");
        
        // Criar estrelas com base na nota
        let estrelas = '';
        for (let i = 0; i < 5; i++) {
            if (i < freelancer.nota) {
                estrelas += '<i class="fas fa-star" style="color: gold;"></i>'; // Estrela preenchida
            } else {
                estrelas += '<i class="far fa-star" style="color: gold;"></i>'; // Estrela vazia
            }
        }

        li.innerHTML = `${estrelas} <i class="fas fa-user" style="margin-right: 10px;"></i>${freelancer.nome} - Região: ${freelancer.regiao}, Gênero: ${freelancer.genero}, Idade: ${freelancer.idade}, Preço: R$${freelancer.preco}`;
        list.appendChild(li);
    });
}