let url = 'https://api.github.com/users/vitorhenr1que/repos'
let arr = []
async function infoAPI() {
    
let pegar = await axios.get(url).then(d => {
    console.log(d.data)
    let isPublic = d.data.map(index => { 
        if (index.visibility === 'public' && arr.length < 4) { // Todos os repositórios publicos vão para array
            arr.push(index) // Empurrar todos os obj para o array da linha 2 
        }
    })
}
)

}
infoAPI()

