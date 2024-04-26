Feature:

    Scenario Outline: Login "<cenario>"
     Given que acessa o pagina home da aplicacao
     When eu inserir meu usuario "<usuario>" e "<senha>"
     And clicar no botao entrar
     Then validar mensagem "<mensagem>"

     Examples:
     |cenario   |usuario            |senha     |mensagem                  |
     | Sucesso  |user@phptravels.com| demouser | com sucesso na aplicacao |

    

