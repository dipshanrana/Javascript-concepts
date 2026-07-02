//old - xmlhttprequest
//fetch api - moder
//fetch + async / await - recommended

//api - application programming interface is an rules which allows software to communicate

//xmlhttprequest

const xhr = new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com/users",true)

xhr.onreadystatechange= function(){
    if(xhr.readyState==4){
        if(xhr.status===200){
            console.log(xhr.responseText)
        }

        else{
            console.log("error",xhr.status)
        }
    }
}

xhr.send()