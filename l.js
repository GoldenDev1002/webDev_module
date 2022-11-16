let app2 = document.getElementById("app2");


let vue2 = new Vue({
    el: app2,
    data() {
        return {
            sitename: "Vue Js Depot",
            
            lesson: {
                id: 1000,
                subject: "Springs",
                img: "subjectPic/biology.jpg",
                price: 1000,
                space: 5,
                location: "hendond",
                icon: "fa-solid fa-user",
                home: "Home is selected",
                business: "business is selected",
                method: " ",
                sendGift: "send as a gift",
                dontSendGift: "do not send gift"


            },
            cart: [],
        }

    },



    methods: {

        canAddtoCart(aLesson) {
            return aLesson.space > this.cartCount(aLesson)
        },



        cartCount(lesson) {
            let count = 0;
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === lesson) {
                    count++
                }
            }

            return count;
        },

        add_To_Cart(lesson) {
            return this.cart.push(lesson);
        },


    },

    /*  methods: {
          canAddtoCart(lesson) {
              return lesson.space > this.cartCount(lesson);
          },
          //pushes item to cart
          add_To_Cart(lesson) {
              this.cart.push(lesson);
          },
          //counts the number of lesson's space being added to cart
          cartCount(lesson) {
              let count = 0;
              for (var i = 0; i < this.cart.length; i++) {
                  if (this.cart[i] === lesson) {
                      count++;
                  }
              }
              return count;
          },
      }, */


    computed: {

    }



})
