Feature: Validar API VR

  Scenario: Validar retorno da API de estabelecimentos
    Given que eu faço uma requisição GET para a API VR
    Then o status code deve ser 200
    And o JSON deve conter a chave "typeOfEstablishment"
    And a lista de estabelecimentos deve ser válida
    And devo imprimir um tipo de estabelecimento aleatório
