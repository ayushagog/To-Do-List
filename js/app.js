var inp = document.querySelector('#inp');
var todo_list = document.querySelector('#todo-list');


inp.addEventListener(
    'keyup', function(event){
        
        // console.log(this);
        // console.log(event)


        console.log(event.key)
        if(event.key == 'Enter'){
            if(this.value ==+ '') 
                // inp.value.reset();
                return
                // console.log(this.value)
            var lielement = document.createElement('li');
            lielement.classList.add('todocl');

            lielement.style.background=getRandomColor();

            lielement.innerHTML=`${this.value} <span > delete </span>`;
            // console.log(lielement);
            todo_list.appendChild(lielement);
            inp.value='';

            var spantarget = lielement.querySelector('span');
            // console.log(lielement);

            // console.log(spantarget[]);
    
            spantarget.addEventListener('click',function(){
                lielement.remove();
            });

            lielement.addEventListener('click',function(){
                lielement.classList.toggle('strike');
            })


            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }


        }
        
      




})