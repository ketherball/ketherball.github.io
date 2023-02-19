function elementCreator(type, attributeType, attribute, text = '') {
    let el = document.createElement(type)
    el.setAttribute(attributeType, attribute)
    el.textContent = text
    return el
}

function elementCreator2(type, text) {
    let el = document.createElement(type)
    el.textContent = text
    return el
}

//Book Tickets
const bookDashboard = document.querySelector(".dashboard-grid")

let bookTicket = elementCreator('div', 'class', 'book-ticket')

let bookInfo = elementCreator('div', 'class', 'book-info')

let bookTicketTitle = elementCreator('p', 'id', 'title')

let bookTicketAuthor = elementCreator('p', 'id', 'author')

let bookTicketPages = elementCreator('p', 'id', 'pages')

let bookTicketRead = elementCreator('p', 'id', 'read')

let bookTicketButtoremoveBookForm = elementCreator('div', 'class', 'book-ticket-buttons')

let bookTicketEditButton = elementCreator2('button', 'Edit')

let bookTicketRemoveButton = elementCreator2('button', 'Remove')

bookTicket.appendChild(bookInfo)
bookInfo.appendChild(bookTicketTitle)
bookInfo.appendChild(bookTicketAuthor)
bookInfo.appendChild(bookTicketPages)
bookInfo.appendChild(bookTicketRead)
bookTicket.appendChild(bookTicketButtoremoveBookForm)
bookTicketButtoremoveBookForm.appendChild(bookTicketEditButton)
bookTicketButtoremoveBookForm.appendChild(bookTicketRemoveButton)

function resetDashboard() {
    let bookTicket = document.querySelectorAll('.book-ticket')
    for (let i = 0; i < bookTicket.length; i++) {
        bookDashboard.removeChild(bookTicket[i])
    }
}

//Book Form
let body = document.querySelector('body')

let bookFormBackground = elementCreator('div', 'class', 'new-book-form-background')

let bookForm = elementCreator('div', 'class', 'new-book-form')

let bookFormCloseout = document.createElement('img')
bookFormCloseout.src = 'icons/closeout-darkgray.svg'

bookFormCloseout.addEventListener('mouseenter', () => {
    bookFormCloseout.src = 'icons/closeout-black.svg'
})

bookFormCloseout.addEventListener('mouseleave', () => {
    bookFormCloseout.src = 'icons/closeout-darkgray.svg'
})

bookFormCloseout.addEventListener('click', () => {
    resetBookForm()
    bookFormCloseout.src = 'icons/closeout-darkgray.svg'
})
    //Form Input
let bookFormTitleLabel = elementCreator2('label', 'Title')

let bookFormTitleInput = document.createElement('input')
    let titleErrorMessage = document.createElement('span')
    inputValidation(bookFormTitleInput, titleErrorMessage)

let bookFormAuthorLabel = elementCreator2('label', 'Author')

let bookFormAuthorInput = document.createElement('input')
    let authorErrorMessage = document.createElement('span')
    inputValidation(bookFormAuthorInput, authorErrorMessage)

let bookFormPagesLabel = elementCreator2('label', 'Pages')

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

let bookFormReadContainer = elementCreator('div', 'style', 'display: inline-block')

let bookFormReadLabel = elementCreator2('label', 'Read Status')

let bookFormReadInput = document.createElement('input')
bookFormReadInput.type = 'checkbox'
bookFormReadInput.checked = false
if (bookFormReadInput.checked == true) {
    bookFormReadInput.value = true
} 
if (bookFormReadInput.checked == false) {
    bookFormReadInput.value = false
}

let bookFormButton = elementCreator('button', 'id', 'new-book-form-button', 'Submit')

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

//Form Validation Errors
function formValidation() {//on Submit
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

function inputValidation(input, error) {//during Input, real-time
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
let book4 = new Book('The Archetypes & the Collective Unconscious', 'C. G. Jung', 451, true)

let book2 = new Book('The Doors of Perception', 'Aldous Huxley', 185, false)

let book3 = new Book("Man's Search for Meaning", 'Viktor Frankyl', 165, true)

let book1 = new Book('Crime & Punishment', 'Fyodor Dostoevsky', 565, true)

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
let removeBookFormBackground = elementCreator('div', 'class', 'new-book-form-background')

let removeBookForm = elementCreator('div', 'class', 'remove-book-form')

let removeBookFormHead = elementCreator('p', 'id', 'remove-book-form-head')

let removeBookFormBody = elementCreator('p', 'id', 'remove-book-form-body', 'Deleted books cannot be recovered.')

let removeBookFormButtonContainer = elementCreator('div', 'class', 'book-ticket-buttons')

let confirmRemoveButton = elementCreator2('button', 'Yes')

let denyRemoveButton = elementCreator2('button', 'No') 

removeBookFormBackground.appendChild(removeBookForm)
removeBookForm.appendChild(removeBookFormHead)
removeBookForm.appendChild(removeBookFormBody)
removeBookForm.appendChild(removeBookFormButtonContainer)
removeBookFormButtonContainer.appendChild(confirmRemoveButton)
removeBookFormButtonContainer.appendChild(denyRemoveButton)

function activateRemoveButton() {
    for (let i = 1; i < myLibrary.length + 1; i++) {
        document.querySelector(`.remove-${i}`).
        addEventListener('click', () => {
            body.appendChild(removeBookFormBackground)
            let title = document.querySelector(`.title-${i}`).textContent
            removeBookFormHead.textContent = `Are you sure you want to remove ${title}?`
            let author = document.querySelector(`.author-${i}`).textContent
            let pages = document.querySelector(`.pages-${i}`).textContent.replace(/\D/g,'')
            confirmRemoveButton.setAttribute('id', `confirm-${i}`)
            denyRemoveButton.setAttribute('id', `cancel-${i}`)
            //
            confirmRemoveButton.addEventListener('click', () => {
                for (i = 0; i < myLibrary.length; i++) {
                    if (myLibrary[i].title == title && 
                        myLibrary[i].author == author &&
                        myLibrary[i].pages == parseInt(pages)) {
                            myLibrary.splice(i, 1)
                            console.log(`Removed ${title}`)
                            console.table(myLibrary)
                            body.removeChild(removeBookFormBackground)
                            resetDashboard()
                            displayLibrary(myLibrary)
                            return
                        }
                }
            })
            //
            denyRemoveButton.addEventListener('click', () => {
                body.removeChild(removeBookFormBackground)
            })
        })
    }
}