fetch('https://api.github.com/users/Klayversonsousa/repos')
  .then(response => response.json())
  .then(data => {
    const projects = 
    data.map(repo => `<li class="card ">
    <a href="${repo.html_url}" target="_blank">
    <img src="./styles/imagens/map-pin.svg" alt="Projeto ${repo.name}">
    ${repo.name}
    </a>

    <p class="descricao">${repo.description !== null ? repo.description : ''}</p>

    <div class="footer">
        <div class="status">
        <span>${repo.stargazers_count}</span>
        <span>${repo.forks_count}</span>
        </div>

        <div class="tec">
        ${repo.language !== null ? repo.language : ''}
        </div>
    </div>
    
    </li>`).join('');

    document.getElementById('projetos').innerHTML = `<ul class="container-projects">${projects}</ul>`;
  })
  .catch(error => console.error(error));


  fetch('https://api.github.com/users/Klayversonsousa')
  .then(response => response.json())
  .then(data => {
    
    document.getElementById("profile-pic").style.backgroundImage = `url(${data.avatar_url})`;

    document.getElementById('username').innerHTML = `${data.name}`;
    
    
})
  .catch(error => console.error(error));



const root = document.documentElement;
const button = document.querySelector('#change-color');

let theme = 'dark';


button.addEventListener('click', () => {
    if(theme === 'light'){
        root.style.setProperty('--body-bg-color', '#22212C');
        root.style.setProperty('--text-color', '#837E9F');
        root.style.setProperty('--bg-cards', '#302F3D');
        root.style.setProperty('--bg-techs', '#CB92B1');
        root.style.setProperty('--green', '#00FF00');
        theme = "dark";
    }else {
        root.style.setProperty('--body-bg-color', '#b4add3');
        root.style.setProperty('--text-color', '#534f68');
        root.style.setProperty('--bg-cards', '#d2d0db');
        root.style.setProperty('--bg-techs', '#CB92B1');
        root.style.setProperty('--green', '#057c05');
        theme = 'light';
    }
    
});


