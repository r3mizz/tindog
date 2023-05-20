class Dog {
    constructor(data){
        Object.assign(this, data)
        
    }

    getDogHtml() {
        const {name, avatar, age, bio} = this
        let badge = ""
        if ( this.hasBeenLiked ) {
            badge = "img/badge-like.png"
        } else if ( this.hasBeenSwiped ) {
            badge = "img/badge-nope.png"
        } else {
            badge = ""
        }
        return `
                <img class="w-full" src="${avatar}" alt="">
                <img class="absolute h-24 -rotate-45 top-20 left-4" src="${badge}" alt="">
                <div class="absolute text-slate-200 bottom-6 left-4">
                    <p class="text-lg font-semibold">${name}, age ${age}</p>
                    <p class="text-sm">"${bio}"</p>
                </div> 
                `
    }
}

export default Dog