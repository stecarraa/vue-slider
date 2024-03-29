const app = new Vue(
{
    el: '#root',

    data:  {
        active:0,
        clock:null,
        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]

    },

    created(){
        this.autoPlay();
    },
   
   
   methods:{

        nextButton: function(){
            this.active++;
            if(this.active === this.slides.length){
                this.active = 0

            }
        },
        prevButton: function(){
            this.active = this.active - 1;
            if(this.active === -1){
                this.active = this.slides.length - 1

            }
        },

        setImage: function(valore){
            this.active=valore;
        },

        autoPlay:function(){
            this.clock=setInterval(()=>{
                this.nextButton();
            },3000);
        },
        stopAutoPlay: function() {
            clearTimeout(this.clock);
            this.clock = null;
        },

    }
}
);

