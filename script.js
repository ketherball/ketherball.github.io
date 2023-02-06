//Create New Project
let projectsDashboard = document.querySelector('.dashboard-grid-container')

let newProjectName = document.createElement('div')
newProjectName.setAttribute('style',
'cursor: pointer; font-size: 13px; font-weight: 700; margin: 15px 3px 3px 15px; overflow: hidden;')

let newProjectDescription = document.createElement('div')
newProjectDescription.setAttribute('style',
'height: 60px; font-size: 10px; color: dimgray; margin: 0px 0px 0px 15px; padding-right: 10px; overflow-y: scroll; overflow-x: hidden;')

let newProjectFooter = document.createElement('div')
newProjectFooter.setAttribute('style', 
'display: flex; justify-content: right; margin: 4% 10px 4% 0px;')

let addFavoriteIcon = document.createElement('img')
addFavoriteIcon.src = 'icons/favorite.svg'
addFavoriteIcon.setAttribute('style', 
'cursor: pointer; display: flex; justify-content: space-between; height: 17px; margin-left: 5%;')

let addWatchlistIcon = document.createElement('img')
addWatchlistIcon.src = 'icons/watchlist.svg'
addWatchlistIcon.setAttribute('style', 
'cursor: pointer; display: flex; justify-content: space-between; height: 17px; margin-left: 5%;')

let forkIcon = document.createElement('img')
forkIcon.src = 'icons/fork.svg'
forkIcon.setAttribute('style', 
'cursor: pointer; display: flex; justify-content: space-between; height: 17px; margin-left: 5%;')

let newProject = document.createElement('div')
newProject.setAttribute('style', 
'display: flex; flex-direction: column; background-color: white; height: 144px; border-left: solid 5px rgb(255, 129, 84); border-radius: 5px; box-shadow: 0px 3px 7px rgba(0,0,0,0.2);')
newProject.appendChild(newProjectName)
newProject.appendChild(newProjectDescription)
newProject.appendChild(newProjectFooter)
newProjectFooter.appendChild(addFavoriteIcon)
newProjectFooter.appendChild(addWatchlistIcon)
newProjectFooter.appendChild(forkIcon)

console.log(projectsDashboard)

//Prompt Create New Project Form
let createNewProject = document.getElementById('new-project')

let body = document.querySelector('body')
const newProjectFormBackground = document.createElement('div')
newProjectFormBackground.setAttribute('style', 
'position: absolute; display: flex; justify-content: center; align-items: center; height: 100vh; width: 100vw; background-color: rgba(0, 0, 0, 0.341); margin: 0')

const newProjectForm = document.createElement('div')
newProjectForm.setAttribute('style', 
'display: flex; position: relative; flex-direction: column; background-color: white; font-size: 15px; height: auto; width: 350px; border-left: solid 5px rgb(255, 129, 84); border-radius: 5px;')

const projectForm = document.createElement('form')
projectForm.action = 'index.html'
projectForm.method = 'post'
projectForm.setAttribute('style',
'display: flex; flex-direction: column; margin-left: 9%; margin-top: 10px;')

const closeoutForm = document.createElement('img')
closeoutForm.src = 'icons/closeout-darkgray.svg'
closeoutForm.setAttribute('style',
'position: absolute; top: 2px; right: 2px; height: 15px')

closeoutForm.addEventListener('mouseover', () => {
    closeoutForm.src = 'icons/closeout-black.svg'
    closeoutForm.setAttribute('style',
    'cursor: pointer; position: absolute; top: 2px; right: 2px; height: 15px')
})

closeoutForm.addEventListener('mouseleave', () => {
    closeoutForm.src = 'icons/closeout-darkgray.svg'
    closeoutForm.setAttribute('style',
    'position: absolute; top: 2px; right: 2px; height: 15px')
})

closeoutForm.addEventListener('click', () => {
    projectNameInput.value = ''
    descriptionInput.value = ''
    body.removeChild(newProjectFormBackground)
})

const projectNameLabel = document.createElement('label')
projectNameLabel.textContent = 'Project Name'
projectNameLabel.setAttribute('style',
'font-weight: 600; margin-top: 5px; margin-bottom: 2px')

const projectNameInput = document.createElement('input')
projectNameInput.setAttribute('style',
'background-color: rgb(224, 233, 245); border: none; border-radius: 20px; width: 275px;')

const descriptionLabel = document.createElement('label')
descriptionLabel.textContent = 'Description'
descriptionLabel.setAttribute('style', 
'font-weight: 600; margin-top: 5px; margin-bottom: 2px')

const descriptionInput = document.createElement('textarea')
descriptionInput.setAttribute('style',
'background-color: rgb(224, 233, 245); border: none; border-radius: 10px; max-width: 275px; min-width: 275px; min-height: 170px')

const createProjectButton = document.createElement('button')
createProjectButton.textContent = 'Create'
createProjectButton.setAttribute('style', 
'background-color: dodgerblue; color: white; border: solid 0px; border-radius: 25px; width: 80px; height: 45px; padding: 2px 0 2px 0; font-size: 14px; font-weight: bold; margin: 12px 0;')

createProjectButton.addEventListener('mouseenter', () => {
    createProjectButton.setAttribute('style', 
    'background-color: rgb(71, 163, 255); cursor: pointer; color: white; border: solid 0px; border-radius: 25px; width: 80px; height: 45px; padding: 2px 0 2px 0; font-size: 14px; font-weight: bold; margin: 12px 0;')
})
createProjectButton.addEventListener('mouseleave', () => {
    createProjectButton.setAttribute('style', 
    'background-color: dodgerblue; color: white; border: solid 0px; border-radius: 25px; width: 80px; height: 45px; padding: 2px 0 2px 0; font-size: 14px; font-weight: bold; margin: 12px 0;')
})
createProjectButton.addEventListener('click', () => {
    if (projectNameInput.value == '') {
        projectNameInput.value = 'New Project'
    }
    newProjectName.textContent = projectNameInput.value
    newProjectDescription.textContent = descriptionInput.value
    projectsDashboard.appendChild(newProject.cloneNode(true))
    projectNameInput.value = ''
    descriptionInput.value = ''
    body.removeChild(newProjectFormBackground)
})

//Prompt window
createNewProject.addEventListener('click', () => {
    body.appendChild(newProjectFormBackground);
    newProjectFormBackground.appendChild(newProjectForm);
    newProjectForm.appendChild(projectForm)
    projectForm.appendChild(closeoutForm)
    projectForm.appendChild(projectNameLabel)
    projectForm.appendChild(projectNameInput)
    projectForm.appendChild(descriptionLabel)
    projectForm.appendChild(descriptionInput)
    projectForm.appendChild(createProjectButton)
})