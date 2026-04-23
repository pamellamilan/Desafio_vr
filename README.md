# 🧪 QA Automation – VR (Backend + Frontend)

Projeto completo de automação de testes contemplando **Backend (API)** e **Frontend (Web)**, utilizando boas práticas de QA, organização por camadas e padrões de mercado.

---

## 📌 Objetivo

Validar:

### 🔹 Backend

Endpoint público da VR:

```text
https://portal.vr.com.br/api-web/comum/enumerations/VRPAT
```

### 🔹 Frontend

Fluxo de contratação:

```text
https://www.vr.com.br/contrate-agora
```

---

## 🛠️ Tecnologias Utilizadas

### Backend

* Ruby
* Cucumber (BDD)
* HTTParty
* JSON

### Frontend

* Node.js
* Cypress
* JavaScript
* Page Object Pattern

---

## 📁 Estrutura do Projeto

```bash
.
├── backend-qa-vr/
│   ├── features/
│   │   ├── remover_texto.feature
│   │   ├── vr_api.feature
│   │   ├── step_definitions/
│   │   │   ├── remover_texto_steps.rb
│   │   │   └── vr_api_steps.rb
│   │   └── support/
│   ├── Gemfile
│   └── README.md
│
├── frontend-qa-vr/
│   ├── cypress/
│   │   ├── e2e/
│   │   │   ├── carrinho.cy.js
│   │   │   └── fluxo-vr-pageobjects.cy.js
│   │   │
│   │   ├── support/
│   │   │   ├── pages/
│   │   │   │   ├── CarrinhoPage.js
│   │   │   │   ├── ContrateAgoraPage.js
│   │   │   │   └── MobilidadePage.js
│   │   │   ├── commands.js
│   │   │   └── e2e.js
│   │
│   ├── cypress.config.js
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

# 🧪 Backend – Automação de API

## ✔ Cenários implementados

### 🔹 Validação da API VR

* ✔ Requisição GET
* ✔ Status code 200
* ✔ Validação da chave `typeOfEstablishment`
* ✔ Validação da estrutura do JSON:

  * Array
  * Não vazio
  * Itens com atributos (`key`, `name`, `label`)
* ✔ Impressão de item aleatório

---

### 🔹 Regra de Negócio (String)

Função que:

* Recebe:

  * uma string
  * um array de marcadores
* Remove:

  * todo texto após o primeiro marcador encontrado

#### Cenários:

| Entrada                | Saída            |
| ---------------------- | ---------------- |
| bananas, tomates # ... | bananas, tomates |
| o rato roeu ... % ...  | o rato roeu ...  |
| the quick brown ... &  | the quick brown  |

---

## ▶️ Executar Backend

```bash
cd backend-qa-vr
gem install bundler
bundle install
cucumber
```

---

## 📊 Resultado esperado

```text
4 scenarios (4 passed)
```

---

# 🌐 Frontend – Automação Web (Cypress)

## ✔ Cenários implementados

* ✔ Acesso à página de contratação
* ✔ Seleção de **Gestão de Mobilidade**
* ✔ Clique em **Próximo**
* ✔ Validação de fluxo

---

## 🧠 Padrões utilizados

* Page Object Pattern
* Separação de responsabilidades
* Reutilização de código
* Seletores resilientes (`cy.contains`)

---

## ▶️ Executar Frontend

```bash
cd frontend-qa-vr
npm install
npx cypress open
```

ou:

```bash
npx cypress run
```

---

## 📸 Evidências

Screenshots automáticos em falhas:

```text
cypress/screenshots/
```

---

# 💡 Diferenciais do Projeto

* ✔ Automação Backend + Frontend integrada
* ✔ Validação real de API (sem mock)
* ✔ Validação estrutural do JSON
* ✔ Uso de BDD (Cucumber)
* ✔ Cypress com Page Object
* ✔ Código organizado e reutilizável
* ✔ Logs para debug
* ✔ Projeto pronto para CI/CD

---

# ⚠️ Pontos de Atenção

* Elementos dinâmicos no frontend podem exigir timeout
* Botões podem depender de seleção prévia
* Possível uso de iframe na navegação

---

# 🧠 Visão de QA

O projeto foi desenvolvido considerando:

* Confiabilidade dos testes
* Clareza de leitura (BDD)
* Facilidade de manutenção
* Cobertura de cenários reais

---

# 👩‍💻 Autora

**Pâmella Milan**
QA Sênior | Automação de Testes | APIs | Performance

📧 [pamella_milan@yahoo.com.br](mailto:pamella_milan@yahoo.com.br)
📞 (11) 98832-6655

---

# 🚀 Considerações Finais

Projeto desenvolvido como parte de desafio técnico, demonstrando:

* Capacidade de automação backend e frontend
* Conhecimento em ferramentas modernas
* Aplicação de boas práticas de QA

---
