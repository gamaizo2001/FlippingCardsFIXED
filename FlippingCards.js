const Counter = {
    data() {
        return {
            question:'',
            answer:'',
            category:'',
            flipped:false,
            Cards:[
                {
                    question:"What year was IUPUI founded?",
                    answer:"1969",
                    category:"history",
                    flipped:false
                },
                {
                    question:"What is 2+2?",
                    answer:"Fish",
                    category:"math",
                    flipped:false
                },
                {
                    question:"Is mayonnaise an instrument?",
                    answer:"No",
                    category:"science",
                    flipped:false
                },

            ]
        }
    },
    methods:{
        toggleCard(index){
            this.Cards[index].flipped=!this.Cards[index].flipped
        },

        add(){
            this.Cards.push({
                question:this.question,
                answer:this.answer,
                category:this.category,
                flipped:false
            })
            this.question="";
            this.answer="";
            this.category=""
        }
    }
}

Vue.createApp(Counter).mount('#flashcards-app')










