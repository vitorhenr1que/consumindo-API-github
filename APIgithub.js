let url = 'https://api.github.com/users/vitorhenr1que'
let arr = []
async function infoAPI() {
    const profileImage = document.querySelector('.profileImage')

let getProfile = await axios.get(url).then(d => {

    profileImage.src = `${d.data.avatar_url}`

    axios(d.data.repos_url).then(response => {
        console.log(response.data)
    
        response.data.map(index => { 
            if (index.visibility === 'public' && arr.length < 4) { // Todos os repositórios publicos < 4 vão para array
                arr.push(index) // Empurrar todos os obj para o array da linha 2 
            }
        })
        for (let i = 0; i < 4; i++){
            createElement(i)
        }})

    


}
)

}
infoAPI()




// Criação de elementos

function createElement(num){
    // Box-Projeto
    let projectContainer = document.querySelector('.projetos-container')
    let projeto = document.createElement('div')
    projeto.classList.add('projeto')
    projectContainer.appendChild(projeto)
    // header-box
    let headerbox = document.createElement('div')
    headerbox.classList.add('header-box')
    projeto.appendChild(headerbox)
    
    let imgHB = document.createElement('img')
    imgHB.src = "./assets/folder.svg"
    headerbox.appendChild(imgHB)

    let pname = document.createElement('p')
    pname.classList.add('project-name')
    headerbox.appendChild(pname)
    pname.innerHTML = `${arr[num].name}`

    let pdescription = document.createElement('p')
    pdescription.classList.add('project-description')
    projeto.appendChild(pdescription)
    pdescription.innerHTML = `${arr[num].description}`
    // footer-box
    let footerbox = document.createElement('div')
    footerbox.classList.add('footer-box')

    //Stars
    projeto.appendChild(footerbox)
    let imgStar = document.createElement('img')
    imgStar.src = "./assets/star.svg"
    footerbox.appendChild(imgStar)

    let pStars = document.createElement('p')
    pStars.classList.add('stars')
    pStars.innerHTML = `${arr[num].stargazers_count}`
    footerbox.appendChild(pStars)

    //Branchs
    let imgBranchs = document.createElement('img')
    imgBranchs.src = "./assets/git-branch.svg"
    footerbox.appendChild(imgBranchs)

    let pBranch = document.createElement('p')
    pBranch.classList.add('branchs')
    pBranch.innerHTML = `10`
    footerbox.appendChild(pBranch)
    
    // program-language
    let divPL = document.createElement('div')
    footerbox.appendChild(divPL)

    let pPL = document.createElement('p')
    pPL.classList.add('program-language')
    pPL.innerHTML = `${arr[num].language}`
    divPL.appendChild(pPL)
  

}