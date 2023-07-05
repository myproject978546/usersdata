const div = document.querySelector("#div")
const body = document.querySelector("body")
let takebox
        const box = document.querySelector(".box")
        function nitesh(hello){
            takebox = hello;
            div.children[0].innerText = hello.children[0].innerText
            div.children[1].innerText = hello.children[1].innerText
            div.children[2].innerText = hello.children[2].innerText
            div.children[3].innerText = hello.children[3].innerText
            
            container.style.display="none"
            div.style.display="block"
        }
        
        function closepopup(){
            takebox=""
            container.style.display="grid"
            body.style.overflow="visible"
            div.style.display="none"
        }

        async function deleterecord(taked){
            let b = div.children[3].innerText.slice(8)
            const deleterecord = await fetch(`http://localhost:6523/delete?email=${b}`)
            container.removeChild(takebox)
            let a = check.indexOf(b)
            console.log(a);
            check.splice(a,1)
            closepopup()
        }
       