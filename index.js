(
    function(){
        window.onload = () =>{


            fetch('/users')
                .then(response => response.json())
                .then((userIds)=>{

                    return userIds.map(userId => fetch('/users/'+ userId.id))
                                  .then(response.json())


                })
                .then(userLikePromises => Promise.all(userLikePromises))
                .then(userlikes => userLikes.map(user => user.likes))
                .then(likes => likes.reduce((total,like)=> total + like,0))
                .then(totalLikes =>{
                    "use strict";
                    document.getElementsById('total-likes').innerHTML = totalLikes +" LIKES"
                    return totalLikes
                })



        }


    })()