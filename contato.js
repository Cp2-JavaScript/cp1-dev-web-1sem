function cadastrar(){
        let name = document.getElementById("name").value
        let number = document.getElementById("number").value
        let email = document.getElementById("email").value
    
        if (name === "" || number === "" || email === ""){
            alert("Preencha todos os campos.");
            return false;
        }
}