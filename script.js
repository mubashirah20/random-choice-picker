const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')


textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})


function createTags(input) {
    //console.log(input) shows what you typed in the box in the console
    //trim takes out an empty space between arrays
    const tags = input.split(',').filter(tag => tag.trim() 
    !== '').map(tag => tag.trim())
    //console.log(tags)

    tagsEl.innerHTML = ''

    tags.forEach(tag =>{
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
                unHighlightTag(randomTag)
        }, 150);
    }, 150);//100ms

    setTimeout(() => {
        //clearInterval function to stop the interval
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    //math.floor to round down
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}