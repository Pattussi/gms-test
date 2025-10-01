# gms-test - Jornada EBAC de QA

Suite de testes automatizados para o site **Golden Movie Studio** (https://golden-movie-studio.vercel.app/).  
O objetivo é validar fluxos principais e garantir que funcionalidades críticas da aplicação continuem funcionando conforme esperado.

---

## 📌 Funcionalidades testadas

As histórias de usuário foram baseadas em **requisitos do negócio** fornecidos e estruturadas em Gherkin.  
Cada funcionalidade mapeada conta com cenários de aceitação.

### 🔍 US-001 - Busca de filmes
- O usuário pode buscar filmes por palavra-chave.
- Resultados devem conter título, capa e sinopse curta.
- Caso não haja resultados, o sistema deve informar ao usuário.
- O usuário pode limpar a busca com o botão **"Limpar Busca"**.
- Resultados devem ser ordenados por **popularidade e nota do IMDB**.
- Deve suportar rolagem infinita se houver mais de 10 resultados.

**Cenários (exemplos):**
- Busca de filmes com palavra-chave válida.
- Busca de filmes sem resultados.
- Limpar a busca de filmes.

---

### 🎬 US-012 - Cadastro de membros
- Campos obrigatórios: **Nome, Sobrenome, Email e Senha**.
- Telefone é opcional, mas deve ser validado se fornecido.
- Após registro bem-sucedido, confrimar cadastro.

**Cenários (exemplos):**
- Registro com todos os campos obrigatórios preenchidos.
- Validação dos campos (nome vazio, email inválido, senha fraca, etc).
- Validação de cada teste.

---

## 🧰 Tecnologias utilizadas
- **Node.js / JavaScript**  
- **Cypress** (framework de testes E2E)  
- Integração contínua via GitHub Actions (opcional)

---

## 🚀 Como rodar os testes localmente

1. Clone o repositório  
   ```bash
   git clone https://github.com/Pattussi/gms-test.git
   cd gms-test
   ```

2. Instale as dependências  
   ```bash
   npm install
   ```

3. Configure a URL base no `cypress.config.js`:  
   ```js
   baseUrl: "https://golden-movie-studio.vercel.app/"
   ```

4. Execute os testes:  

   - Modo interativo (debug):  
     ```bash
     npx cypress open
     ```

   - Modo headless (CI):  
     ```bash
     npx cypress run
     ```

---

## 📂 Estrutura de pastas

```
gms-test/
│
├── cypress/
│   ├── e2e/                # casos de teste (specs)
│   ├── fixtures/           # dados de teste
│   ├── support/            # comandos customizados, hooks
│   └── ...
├── cypress.config.js       # configuração Cypress
├── package.json
└── README.md
```

---

## 🤝 Como contribuir
1. Faça um fork  
2. Crie sua branch: `git checkout -b feature/nova-funcionalidade`  
3. Commit suas alterações  
4. Push para seu repositório  
5. Abra um Pull Request  

---
## 🚀 Melhorias Futuras

- Finalizar o cenários de testes **recomendações**.
---
## ✨ Sobre Mim
Sou **Leonardo Pattussi**, profissional em transição para a área de **Qualidade de Software (QA)**.  
Após mais de 12 anos atuando como gerente comercial, concluí o **Bootcamp QA da TripleTen**, aplicando agora minha experiência analítica e de processos para garantir a entrega de produtos digitais de qualidade.  

📫 Contato: [pattussi@hotmail.com](mailto:pattussi@hotmail.com) | [LinkedIn](https://linkedin.com/in/leonardo-pattussi)  
