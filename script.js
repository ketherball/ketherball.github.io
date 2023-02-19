//Book Tickets
const bookDashboard = document.querySelector(".dashboard-grid")

let bookTicket = document.createElement('div')
bookTicket.setAttribute('class', 'book-ticket')

let bookInfo = document.createElement('div')
bookInfo.setAttribute('class', 'book-info')

let bookTicketTitle = document.createElement('p')
bookTicketTitle.setAttribute('id', 'title')

let bookTicketAuthor = document.createElement('p')
bookTicketAuthor.setAttribute('id', 'author')

let bookTicketPages = document.createElement('p')
bookTicketPages.setAttribute('id', 'pages')

let bookTicketRead = document.createElement('p')
bookTicketRead.setAttribute('id', 'read')

let bookTicketButtonContainer = document.createElement('div')
bookTicketButtonContainer.setAttribute('class', 'book-ticket-buttons')

let bookTicketEditButton = document.createElement('button')
bookTicketEditButton.textContent = 'Edit'

let bookTicketRemoveButton = document.createElement('button')
bookTicketRemoveButton.textContent = 'Remove'

bookTicket.appendChild(bookInfo)
bookInfo.appendChild(bookTicketTitle)
bookInfo.appendChild(bookTicketAuthor)
bookInfo.appendChild(bookTicketPages)
bookInfo.appendChild(bookTicketRead)
bookTicket.appendChild(bookTicketButtonContainer)
bookTicketButtonContainer.appendChild(bookTicketEditButton)
bookTicketButtonContainer.appendChild(bookTicketRemoveButton)

function resetDashboard() {
    let bookTicket = document.querySelectorAll('.book-ticket')
    for (let i = 0; i < bookTicket.length; i++) {
        bookDashboard.removeChild(bookTicket[i])
    }
}

//Book Form
let body = document.querySelector('body')

let bookFormBackground = document.createElement('div')
bookFormBackground.setAttribute('class', 'new-book-form-background')

let bookForm = document.createElement('div')
bookForm.setAttribute('class', 'new-book-form')

let bookFormCloseout = document.createElement('img')
bookFormCloseout.src = 'icons/closeout-darkgray.svg'

bookFormCloseout.addEventListener('mouseenter', () => {
    bookFormCloseout.src = 'icons/closeout-black.svg'
    //bookFormCloseout.setAttribute('style',
    //'position: relative; top: -17px; right: -113px; height: 14px; cursor: pointer')
})

bookFormCloseout.addEventListener('mouseleave', () => {
    bookFormCloseout.src = 'icons/closeout-darkgray.svg'
    //bookFormCloseout.setAttribute('style',
    //'position: relative; top: -17px; right: -113px; height: 14px; cursor: pointer')
})

bookFormCloseout.addEventListener('click', () => {
    resetBookForm()
    bookFormCloseout.src = 'icons/closeout-darkgray.svg'
    //bookFormCloseout.setAttribute('style',
    //'position: relative; top: -17px; right: -113px; height: 14px; cursor: pointer')
})
    //Form Input
let bookFormTitleLabel = document.createElement('label')
bookFormTitleLabel.textContent = 'Title'

let bookFormTitleInput = document.createElement('input')
    let titleErrorMessage = document.createElement('span')
    inputValidation(bookFormTitleInput, titleErrorMessage)

let bookFormAuthorLabel = document.createElement('label')
bookFormAuthorLabel.textContent = 'Author'

let bookFormAuthorInput = document.createElement('input')
    let authorErrorMessage = document.createElement('span')
    inputValidation(bookFormAuthorInput, authorErrorMessage)

let bookFormPagesLabel = document.createElement('label')
    bookFormPagesLabel.textContent = 'Pages'

let bookFormPagesInput = document.createElement('input')
    let pagesErrorMessage = document.createElement('span')
    bookFormPagesInput.addEventListener('input', () => {//Pages Input Validation
        if (/^\d+$/.test(bookFormPagesInput.value) == false) {
            pagesErrorMessage.textContent = '*Input must a be numerical value'
        }
        if (/^\d+$/.test(bookFormPagesInput.value) == false &&
            bookFormPagesInput.value == '') {
            pagesErrorMessage.textContent = '*Field Required'
        }
        if (! /^\d+$/.test(bookFormPagesInput.value) == false) {
        pagesErrorMessage.textContent = ''
    }
    })

let bookFormReadContainer = document.createElement('div')
bookFormReadContainer.setAttribute('style',
'display: inline-block')

let bookFormReadLabel = document.createElement('label')
bookFormReadLabel.textContent = 'Read Status'

let bookFormReadInput = document.createElement('input')
bookFormReadInput.type = 'checkbox'
bookFormReadInput.checked = false
if (bookFormReadInput.checked == true) {
    bookFormReadInput.value = true
} 
if (bookFormReadInput.checked == false) {
    bookFormReadInput.value = false
}

let bookFormButton = document.createElement('button')
bookFormButton.textContent = 'Submit'
bookFormButton.setAttribute('id', 'new-book-form-button')

    bookFormBackground.appendChild(bookForm)
    bookForm.appendChild(bookFormCloseout)
    bookForm.appendChild(bookFormTitleLabel)
    bookFormTitleLabel.appendChild(titleErrorMessage)
    bookForm.appendChild(bookFormTitleInput)
    bookForm.appendChild(bookFormAuthorLabel)
    bookFormAuthorLabel.appendChild(authorErrorMessage)
    bookForm.appendChild(bookFormAuthorInput)
    bookForm.appendChild(bookFormPagesLabel)
    bookFormPagesLabel.appendChild(pagesErrorMessage)
    bookForm.appendChild(bookFormPagesInput)
    bookForm.appendChild(bookFormReadContainer)
    bookFormReadContainer.appendChild(bookFormReadLabel)
    bookFormReadContainer.appendChild(bookFormReadInput)
    bookForm.appendChild(bookFormButton)

function resetBookForm() {
    body.removeChild(bookFormBackground)
    bookFormTitleInput.value = ''
    bookFormAuthorInput.value = ''
    bookFormPagesInput.value = ''
    bookFormReadInput.checked = false
    titleErrorMessage.textContent = ''
    authorErrorMessage.textContent = ''
    pagesErrorMessage.textContent = ''
}

//Create/Edit Book
let newBookButton = document.querySelector('#new-book-button')

newBookButton.addEventListener('click', () => {
    body.appendChild(bookFormBackground)
    bookFormButton.setAttribute('class', 'new-book')
})

bookFormButton.addEventListener('click', () => {
    if (bookFormButton.classList.contains('new-book')) {
        formValidation()
        if (! bookFormTitleInput.value == '' &&
            ! bookFormAuthorInput.value == '' &&
            ! /^\d+$/.test(bookFormPagesInput.value) == false) {//Form meets validation requirements
                let newBook = new Book(bookFormTitleInput.value.trim(), bookFormAuthorInput.value.trim(), 
                    bookFormPagesInput.value, bookFormReadInput.checked)
                    addBookToLibrary(newBook)
                    resetBookForm()
                    resetDashboard()
                    displayLibrary(myLibrary)
                    console.table(myLibrary)
        }
    }
    if (! bookFormButton.classList.contains(`new-book`)) {
        formValidation()
        if (! bookFormTitleInput.value == '' &&
            ! bookFormAuthorInput.value == '' &&
            ! /^\d+$/.test(bookFormPagesInput.value) == false) {//Form meets validation requirements
                let classNumber = bookFormButton.className.replace(/\D/g,'')
                let title = document.querySelector(`.title-${classNumber}`).textContent
                let author = document.querySelector(`.author-${classNumber}`).textContent
                let pages = document.querySelector(`.pages-${classNumber}`).textContent.replace(/\D/g,'')
                for (i = 0; i < myLibrary.length; i++) {
                    if (myLibrary[i].title == title && 
                        myLibrary[i].author == author &&
                        myLibrary[i].pages == parseInt(pages)) {
                            myLibrary[i].title = bookFormTitleInput.value.trim()
                            myLibrary[i].author = bookFormAuthorInput.value.trim()
                            myLibrary[i].pages = parseInt(bookFormPagesInput.value)
                            myLibrary[i].read = bookFormReadInput.checked
                            resetBookForm()
                            resetDashboard()
                            displayLibrary(myLibrary)
                            console.table(myLibrary)
                            return
                        }
                }
        }
    }
})

//Form Validation Errors on Submit
function formValidation() {
    if (bookFormTitleInput.value == '') {
        titleErrorMessage.textContent = '*Field required'
    }
    if (bookFormAuthorInput.value == '') {
        authorErrorMessage.textContent = '*Field required'
    }
    if (bookFormPagesInput.value == '') {
        pagesErrorMessage.textContent = '*Field required'
    }
    if (! bookFormPagesInput.value == '' && 
        /^\d+$/.test(bookFormPagesInput.value) == false) {
        pagesErrorMessage.textContent = '*Input must a be numerical value'
    }
    if (myLibrary.some((books) => {return books.title == bookFormTitleInput.value.trim()}) == true &&
        myLibrary.some((books) => {return books.author == bookFormAuthorInput.value.trim()}) == true) {
        titleErrorMessage.textContent = '*Must be new book'
    }
}

function inputValidation(input, error) {
    input.addEventListener('input', () => {
        if (! input.value == '') {
            error.textContent = ''
        }
        if (input.value == '') {
            error.textContent = '*Field required'
        }
    })
}

//My Library
let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages =  Number(pages)
    this.read = read
}

function displayLibrary(array) {
    for (let i = 0; i < array.length; i++) {
        bookTicketTitle.textContent = array[i].title
        bookTicketTitle.setAttribute('class', `title-${i + 1}`)
        bookTicketAuthor.textContent = array[i].author
        bookTicketAuthor.setAttribute('class', `author-${i + 1}`)
        bookTicketPages.textContent = `${array[i].pages} pages`
        bookTicketPages.setAttribute('class', `pages-${i + 1}`)
        if (array[i].read === true) {
            bookTicketRead.textContent = 'Read'
        }
        if (array[i].read === false) {
            bookTicketRead.textContent = 'Not Read'
        }
        bookTicketRead.setAttribute('class', `read-${i + 1}`)
        bookTicketEditButton.setAttribute('class', `edit-${i + 1}`)
        bookTicketRemoveButton.setAttribute('class', `remove-${i + 1}`)
        bookDashboard.appendChild(bookTicket.cloneNode(true))
    }
    activateEditButton()
    activateRemoveButton()
}

    //Temporary Books
let book1 = new Book('The Archetypes & the Collective Unconscious', 'C. G. Jung', 451, true)

let book2 = new Book('The Doors of Perception', 'Aldous Huxley', 1185, false)

let book3 = new Book("Man's Search for Meaning", 'Viktor Frankyl', 165, true)

let book4 = new Book('Crime & Punishment', 'Fyodor Dostoevsky', 565, true)

let book5 = new Book('Liber Null & Psychonaut', 'Peter J. Carrol', 196, true)

let book6 = new Book('Synchronicity', 'C. G. Jung', 135, true)

let book7 = new Book('Dreams', 'C. G. Jung', 337, true)

let book8 = new Book('The Lucifer Effect', 'Philip Zimbardo', 549, true)

let book9 = new Book('The Psychedelic Experience', 'Timothy Leary', 124, true)

let book10 = new Book('Liber ABA', 'Aleister Crowley', 843, false)

function addBookToLibrary(book) {
    myLibrary.push(book)
}

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
addBookToLibrary(book5)
addBookToLibrary(book6)
addBookToLibrary(book7)
addBookToLibrary(book8)
addBookToLibrary(book9)
addBookToLibrary(book10)

console.table(myLibrary)

displayLibrary(myLibrary)

//Sort Display
let sortByTitleButton = document.querySelector('#sort-title')
sortByTitleButton.addEventListener('click', () => {
    resetDashboard()
    let sortByTitle = [...myLibrary].sort((a, b) => {
        if (a.title.startsWith('The') && b.title.startsWith('The')) {
            return a.title[4].localeCompare(b.title[4])
        }
        if (a.title.startsWith('The') && ! b.title.startsWith('The')) {
            return a.title[4].localeCompare(b.title)
        }
        if (! a.title.startsWith('The') && b.title.startsWith('The')) {
            return a.title.localeCompare(b.title[4])
        }
        if (! a.title.startsWith('The') && ! b.title.startsWith('The')) {
            return a.title.localeCompare(b.title)
        }
    })
    displayLibrary(sortByTitle)
})

let sortByAuthorButton = document.querySelector('#sort-author')
sortByAuthorButton.addEventListener('click', () => {
    resetDashboard()
    let sortByAuthor = [...myLibrary].sort((a, b) => {
        if (a.author.indexOf(' ') > -1 && b.author.indexOf(' ') > -1) {
            return a.author.split(' ').reverse().join(' ')[0].
                localeCompare(b.author.split(' ').reverse().join(' ')[0])
        }
        if (a.author.indexOf(' ') > -1 && ! b.author.indexOf(' ') > -1) {
            return a.author.split(' ').reverse().join(' ')[0].
                localeCompare(b.author)
        }
        if (! a.author.indexOf(' ') > -1 && b.author.indexOf(' ') > -1) {
            return a.author.
                localeCompare(b.author.split(' ').reverse().join(' ')[0])
        }
        if (! a.author.indexOf(' ') > -1 && ! b.author.indexOf(' ') > -1) {
            return a.author.localeCompare(b.author)
        }
    })
    displayLibrary(sortByAuthor)
})

let sortByPagesButton = document.querySelector('#sort-pages')
sortByPagesButton.addEventListener('click', () => {
    resetDashboard()
    let sortByPages = [...myLibrary].sort((a, b) => a.pages > b.pages ? 1 : -1)
    displayLibrary(sortByPages)
})

//Edit Book Ticket
function activateEditButton() {
    for (let i = 1; i < myLibrary.length + 1; i++) {
        document.querySelector(`.edit-${i}`).
        addEventListener('click', () => {
            body.appendChild(bookFormBackground)
            let title = document.querySelector(`.title-${i}`).textContent
            bookFormTitleInput.value = title
            let author = document.querySelector(`.author-${i}`).textContent
            bookFormAuthorInput.value = author
            let pages = document.querySelector(`.pages-${i}`).textContent
            bookFormPagesInput.value = pages.replace(/\D/g,'')
            let read = document.querySelector(`.read-${i}`).textContent
            if (read == 'Read') {
                bookFormReadInput.checked = true
            }
            bookFormButton.setAttribute('class', `edit-book-${i}`)
        })
    }
}   

//Remove Book Ticket
function activateRemoveButton() {
    for (let i = 1; i < myLibrary.length + 1; i++) {
        document.querySelector(`.remove-${i}`).
        addEventListener('click', () => {
            let title = document.querySelector(`.title-${i}`).textContent
            let author = document.querySelector(`.author-${i}`).textContent
            let pages = document.querySelector(`.pages-${i}`).textContent.replace(/\D/g,'')
            for (i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].title == title && 
                    myLibrary[i].author == author &&
                    myLibrary[i].pages == parseInt(pages)) {
                        myLibrary.splice(i, 1)
                        console.log(`Removed ${title}`)
                        console.table(myLibrary)
                        resetDashboard()
                        displayLibrary(myLibrary)
                        return
                    }
            }
            //resetDashboard()
            //displayLibrary(myLibrary)
        })
    }
}