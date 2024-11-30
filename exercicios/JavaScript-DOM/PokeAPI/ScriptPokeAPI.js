document.getElementById('searchButton').addEventListener('click', () => {
    let pokemonName = document.getElementById('pokemonName').value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            // Manipulando o DOM para exibir as informações
            document.getElementById('pokemonTitle').textContent = data.name.toUpperCase();
            document.getElementById('pokemonImage').src = data.sprites.front_default;
            document.getElementById('pokemonType').textContent = `Tipo(s): ${data.types.map(type => type.type.name).join(', ')}`;

            data.abilities.forEach(ability => {
                const abilityLi = document.createElement('li');
                habilidade = ability.ability.name;
                abilityLi.textContent = habilidade;
                
                fetch(`https://pokeapi.co/api/v2/ability/${habilidade}`)
                    .then(response => response.json())
                    .then(abilityData =>
                        abilityLi.appendChild(document.createTextNode(` - ${abilityData.effect_entries[0].effect}`)));
                // Adicionando a lista de habilidades ao DOM
                document.getElementById('pokemonAbilities').appendChild(abilityLi);
            });

            // Exibindo as estatísticas
            //let stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ');

            const statUlist = document.getElementById('pokemonStats');

            data.stats.forEach(stat => {
                const statLi = document.createElement('li');
                statLi.textContent = `${stat.stat.name}: ${stat.base_stat}`
                console.log(`${stat.stat.name}: ${stat.base_stat}`)
                statUlist.appendChild(statLi);
            }); //substituir appendChild para uma atribuição de valor para evitar a criação de multiplos status

            //document.getElementById('pokemonStats').textContent = `Estatísticas: ${stats}`;
        })
        .catch(error => {
            alert('Pokémon não encontrado!');
            console.error('Erro:', error);
        });
});