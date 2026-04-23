Feature: Remover texto após marcador

  Scenario: Cenário 1
    Given a string "bananas, tomates # e ventiladores"
    And os marcadores "#,!"
    Then o resultado deve ser "bananas, tomates"

  Scenario: Cenário 2
    Given a string "o rato roeu a roupa $ do rei % de roma"
    And os marcadores "%,!"
    Then o resultado deve ser "o rato roeu a roupa $ do rei"

  Scenario: Cenário 3
    Given a string "the quick brown fox & jumped over * the lazy dog"
    And os marcadores "&,*,%,!"
    Then o resultado deve ser "the quick brown fox"
