//Variaveis Globais
var d = document;
var Nomes = [];
var aux = [];
var i;

function processar(idTabela) //Inserir Linhas  e Verificar se o nome ja foi inscrito
{
    
    var item = document.getElementById('txt').value;
    if (Nomes.indexOf(item) > -1) {
        alert("Esse Nome já foi salvo");
        event.preventDefault(); //impede que o evento padrão ocorra
        
    } else {
    var newRow = d.createElement('tr');
	newRow.insertCell(0).innerHTML = d.getElementsByName('Nome')[0].value;
    newRow.insertCell(1).innerHTML = d.getElementsByName('Idade')[0].value;
    //Botao para Editar e Excluir linha    v
    newRow.insertCell(2).innerHTML = '<button class="btn btn-primary btn-outline-danger btn-sm" name="apagar" type="button" onclick="removeItem(this)" value="Excluir Item" </span>Excluir item</button>'
    

    //Botao para Editar e Excluir linha    ^
    d.getElementById(idTabela).appendChild(newRow);
    Nomes.push(d.getElementsByName('Nome')[0].value);
    return false;


    }
};


function removerContato(botao) {
    
    Nomes.splice(d.getElementsByName('Nome')[0].value); // Deleta o elemento dentro do array!
    document.getElementById("dibotao").innerHTML =('<button type="button" class="btn btn-outline-info " onclick="editar(this)"><span class="glyphicon glyphicon-ok">Editar Tabela</span></button>');
   
 }
 
 function editar(botao) {
 
    $(function () {
        document.getElementById("dibotao").innerHTML =('<button type="button" class="btn btn-warning " onclick="removerContato(this)"><span class="glyphicon glyphicon-ok">Salvar</span></button>');
        alert("Dois Cliques a onde deseja editar na tabela")
        $('#myTable td').dblclick(function () {
            var conteudoOriginal = $(this).text();
            
             
            $(this).addClass("celulaEmEdicao");
            $(this).html("<input type='text' value='" + conteudoOriginal + "' />");
            $(this).children().first().focus();
            
     
            $(this).children().first().blur(function () {
                
                    var novoConteudo = $(this).val();
                    $(this).parent().text(novoConteudo);
                    Nomes.push(d.getElementsByClassName("celulaEmEdicao").value);
                    $(this).parent().removeClass("celulaEmEdicao");
                    
                
                    
            });
            
             
        $(this).children().first().blur(function(){
            $(this).parent().text(conteudoOriginal);
            $(this).parent().removeClass("celulaEmEdicao");
            
            return stop;   
            
        });
        
        });
           });
 }


function removeItem(r){
	var i = r.parentNode.parentNode.rowIndex;
	var r = confirm("Deseja apagar linha?");
	if (r == true) {
        document.getElementById("idtabela").deleteRow(i); // Deleta a Linha! 
        Nomes.splice(d.getElementsByName('Nome')[0].value); // Deleta o elemento dentro do array!
} 	else { 
    button.addEventListener ("click", function() {
        alert("did something");
      });
	
}

};
