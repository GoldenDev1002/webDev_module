
let vueApp = document.getElementById("newApp"); // it will run first and get the element with new app which is assigned to vueApp varaible and placed in vue instance
import {lessons} from "./lessons.js"

let app = new Vue({
    el: vueApp,
    data() {
      return { //key is a unique identifier for each of the object  that maps 
        sitename: "Vue.js School Project",
        
       /* lesson: {
          id: 1000,
          subject: "English",
          location: "Hendon",
          price: 2000,
          image: "subjectPic/english.jpg",

          disable: false,
          spaces: 5,
          showContent: true,
          name: "",
          phoneNumber: "",
        },*/


        lessons, //is a state in vue
        cart: [],
        showContent: true,
        nameInput : "",
        numberInput: "",
        message: "",
        search : "",
        sortFeature: "",
        sortOption: "",
        ascending : "",
        descending : ""

       
      
      };
    },
filters: {

},
    methods: {
      addToCart(aLesson) {
        // reduces number of spaces for lesson given
        aLesson.spaces--;

        // check if lesson passed is already existing in cart
        var existingItemInCart = this.cart.find(item => item.lessonId === aLesson.id);
        if(existingItemInCart == null){
          // lesson does not yet exist in cart, add lesson to cart
          // create and save cartItem object for new lesson to be added to cart
          var cartItem = {lessonId : aLesson.id, spaces: 1, lesson: aLesson};
          this.cart.push(cartItem);
        }else{
          // update number of spaces for existing lesson in cart
          ++existingItemInCart.spaces;
        }
      },

    
      showButton() {
        this.showContent = this.showContent ? false : true;
      },

      canAddToCart(aLesson) {
        return aLesson.spaces > this.cartCount(aLesson.id);
      },

      cartCount(lesson){
        let count = 0;
        for(var i = 0; i < this.cart.length; i++){
          if(this.cart[i]=== lesson){
            count++
          }
        }

        return count;
      },


      validations(fields, regex){
        if(regex.test(fields.value)){
       fields.className = "valid"
        }
        else{
          fields.className = "invalid"
        }

      
      }


    ,

    
  

  
      checkBtn(){

        let patterns = {
          telephone : /^[/d{11}]$/,
          strings : /^[a-zA-Z]$/ 
  
        }


        
        if(this.nameInput.length != 0 && this.numberInput.length != 0){
          this.message = "Complete"; 
             document.getElementById("naming").addEventListener("keyup", names);
          

        function names(){
          let telephone = /^\d{11}$/
          let tel2 = /^0[0-9]{11}$/
          let strings =  /[a-zA-Z]/g
          let x = document.getElementById("naming");
          let y = document.getElementById("numbering");
          

          
          if(strings.test(x.value) && telephone.test(y.value) ){
            x.style.backgroundColor = "green";
            y.style.backgroundColor = "green";
            x.style.color = "white";
            y.style.color = "white";
            alert("Correct Details");
            
          }
          else{
            x.style.backgroundColor = "red";
            y.style.backgroundColor = "red";
            x.style.color = "white";
            y.style.color = "white";
          }

         /* if(telephone.test(x.value)){
            console.log("trues")
          }
          else if(strings.test(x.value)){
     console.log("it's a string")
          }

          if(telephone.test(y.value)){
            console.log("trues 2")
          }
          else if(strings.test(y.value)){
     console.log("it's a string 2")
          } */

          if(strings.test(x.value) && telephone.test(y.value) ){
            console.log("correct form")
          }

        } 
       

        names()
          
        }
        else{
          this.message = "Fill in all the fields"
        }
        },



        
      
    },

    
    computed: {
      cartItem: function () {
        return this.cart.length || ""; //this data is unsuitabkle because of use rinteraction i.e the user is supposed to input in this scenario
      },


     

      filteredLessons : function(){
        let eachLesson = this.lessons;
        if(this.search != ""){
          eachLesson = eachLesson.filter((lesson) => {

            return lesson.subject.toLowerCase().match(this.search) || lesson.location.toLowerCase().match(this.search)
          })

          
        }


   
  


        // second option

       /* if(this.lessons.length > 0){
          let lessonArray = this.lessons.slice(0);

          if(this.sortFeature === "subject"){
          function compare(a, b){
            if(a.subject.toLowerCase() < b.subject.toLowerCase())
              return -1
            
            if(a.subject.toLowerCase() > b.subject.toLowerCase())
              return 1
            
            return 0
          }

          return lessonArray.sort(compare)
        }

        else if(this.sortFeature === "price"){

          let lessonArray = this.lessons.slice(0);

          function compare(a, b){
            return a.price - b.price 
          }

          return lessonArray.sort(compare)
            
         
        }


        else if(this.sortFeature === "location"){

          if(this.lessons.length > 0){
            let lessonArray = this.lessons.slice(0);

          function compare(a, b){
            if(a.location.toLowerCase() < b.location.toLowerCase())
              return -1
            
            if(a.location.toLowerCase() > b.location.toLowerCase())
              return 1
            
            return 0
          }

          return lessonArray.sort(compare)

        }
      
        }


    



        


        } */


        if (this.sortOption === "ascending") {
          
          switch (this.sortFeature) {
            case "subject":
              return lessons.sort((a, b) => {
                if (a.subject.toLowerCase() < b.subject.toLowerCase()) 
                return -1;
                return 1;
              });
            case "location":
              return lessons.sort((a, b) => {
                if (a.location.toLowerCase() < b.location.toLowerCase())
                  return -1;
                return 1;
              });
            case "price":
              return lessons.sort((a, b) => a.price - b.price);
            case "availability":
              return lessons.sort(
                (a, b) => a.spaces - a.count - (b.spaces - b.count)
              );
          }
        }else if(this.sortOption === "descending"){
          switch (this.sortFeature) {
            case "subject":
              return lessons.sort((a, b) => {
                if (a.subject.toLowerCase() < b.subject.toLowerCase()) 
                return 1;
                return -1;
              });
            case "location":
              return lessons.sort((a, b) => {
                if (a.location.toLowerCase() < b.location.toLowerCase()) return 1;
                return -1;
              });
            case "price":
              return lessons.sort((a, b) => b.price - a.price);
            case "availability":
              return lessons.sort(
                (a, b) => (b.spaces - b.count )- (a.spaces - a.count)
              );
          }
        }




        return eachLesson
   }





        }


       



        


       


    
      
       //returns this.lessons array and uses the filter method , to filter each lesson item and return if the title lesson exists it should be true, if it doesn't exist,it shoulbe be false
       //returns an updated array to be looped over 
      },


      

      
     
     /* canAddToCart: function () {
        return this.lessons.spaces > this.cartItem;
      }, */

    

    )