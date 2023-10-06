let b = document.querySelector(".btn")
        let flag=0;
        b.style.cursor="pointer";
        b.addEventListener("click",function(){
            if(flag==0){
                b.innerHTML="Remove Friend"
                flag=1;
                b.style.backgroundColor="Red"
                document.querySelector("h3").innerHTML="You both are Friends";
                document.querySelector("h3").style.color="green";
            }
            else if(flag==1){
                b.innerHTML="Add Friend"
                flag=0;
                b.style.backgroundColor="rgb(129, 129, 255)"
                document.querySelector("h3").innerHTML="You both are Strangers";
                document.querySelector("h3").style.color="black";
            }
        })


        let g=document.querySelector(".gitbtn")
        g.style.cursor="pointer";
        g.addEventListener("click",function(){
            g.innerHTML="Redirecting to gitHub...."
        })



        
