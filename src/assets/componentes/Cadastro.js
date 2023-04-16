    class Cadastro {
        constructor() {
        this.id = 1;
        this.arrayCadastro = [];
        }
    
        receberDados() {
        
        let cadastro = this.lerDados();
        if (this.validarDados(cadastro) === true) {
            this.salvar(cadastro);
            this.mostrarRetornoPositivo();
        } else {
            this.mostrarRetornoNegativo();
        }
    
        this.limpar();
        }
    
        lerDados() {
        let cadastro = {};
        cadastro.id = this.id;
        cadastro.cpfPessoa = document.getElementById("cpf").value;
        cadastro.senhaPessoa = document.getElementById("senha").value;
        return cadastro;
        }
    
        validarDados(cadastro) {
        if (cadastro.cpfPessoa == "") {
            let respostacpf = document.getElementById("respostacpf");
            respostacpf.innerText = "*Por favor, digite seu CPF.";
            this.mostrarRetornoNegativo();
            return false;
        } else {
            let respostacpf = document.getElementById("respostacpf");
            respostacpf.innerText = "";
        }
    
        if (cadastro.senhaPessoa == "") {
            let respostasenha = document.getElementById("respostasenha");
            respostasenha.innerText = "*Por favor, digite sua senha.";
            this.mostrarRetornoNegativo();
            return false;
        } else {
            let respostasenha = document.getElementById("respostasenha");
            respostasenha.innerText = "";
        }
    
        return true;
        }
    
        salvar(cadastro) {
        this.arrayCadastro.push(cadastro);
        this.id++;
        }
    
        mostrarRetornoNegativo() {
        let respostaCadastro = document.getElementById("respostacadastro");
        respostaCadastro.innerText = "Campos obrigatórios não preenchidos!";
        respostaCadastro.style.color = "red";
        respostaCadastro.style.textAlign = "right";
        }
    
        mostrarRetornoPositivo() {
        let respostaCadastro = document.getElementById("respostacadastro");
        respostaCadastro.innerText = "Cadastro realizado com sucesso!";
        respostaCadastro.style.color = "#2cd62c";
        respostaCadastro.style.textAlign = "left";
        }
    
        limpar() {
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        }
    }
    
    var cadastro = new Cadastro();
    console.log(cadastro);
    