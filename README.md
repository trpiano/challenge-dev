<h1 align="center">
   Desafio
  
<br>
<h3 align="center">
   
<br>
</h3>
</h1>

Bem-vindo ao teste para a correção e implementação de alterações em um sistema hipotético. Neste teste, você será responsável por corrigir problemas de padronização, bugs e implementar melhorias propostas pela gerência e pela equipe de design. O sistema em questão é uma plataforma existente que requer modificações para incluir uma página de adição e edição de empreendimentos, bem como ajustes de design, como cores, fontes e dimensões de componentes.

Foi solicitado também pelo líder técnico a criação de uma API REST simples em Nodejs utilizando Express para substituir o json-server que é utilizado atualmente. 

**Instruções:**

1. **Análise do Sistema Atual:**
   - Examine o sistema existente e identifique problemas de padronização, bugs e áreas de baixa qualidade no código.
   - Compreenda as alterações propostas pela gerência e pelo design, incluindo a adição da página de adição e edição de empreendimentos, mudanças de cores, fontes e dimensões de componentes.

2. **Implementação das Alterações Propostas:**
   - Corrija os problemas de padronização no código, seguindo as melhores práticas de desenvolvimento.
   - Implemente a página de adição e edição de empreendimentos de acordo com as especificações fornecidas pela equipe de design.
   - Faça as alterações de design conforme indicado no Figma.
   - Implemente um backend simples em Nodejs utilizando Express para servir os dados e as funcionalidade. Não é necessário um banco de dados para o armazenamento de dados, apenas a implementação da logica e estrutura de uma API rest é necessário.

3. **Proposta de Melhorias no Layout:**
   - Além das alterações solicitadas, proponha melhorias adicionais no layout, como feedbacks de sucesso e erro, otimizações de usabilidade, entre outros.
   - Demonstre sua capacidade de pensar de forma criativa e oferecer sugestões que melhorem a experiência do usuário e a funcionalidade geral do sistema.

**Observações:**
   - Você será avaliado com base na qualidade do código, aderência às diretrizes de design, capacidade de implementar as alterações solicitadas de forma precisa e oportuna, e na criatividade e pertinência das melhorias propostas.
   - Este teste destina-se a avaliar suas habilidades de desenvolvimento de software, incluindo capacidade de análise, resolução de problemas, colaboração com equipes multidisciplinares e pensamento crítico.
   - Qualquer dúvida sobre os requisitos ou as expectativas do teste, não hesite em entrar em contato para esclarecimentos adicionais.

Boa sorte!

Os dados são servidos via um Fake api que esta nesse repositório(enterprises-server).

Utilize o figma como base para o cadastro e exibição de dados. [FIGMA do Projeto](https://www.figma.com/file/WTRPWhuCj2hLPjIWVepKkw/Desafio-3.0?type=design&node-id=0%3A551&mode=dev&t=lf66gdpZecAZiwTG-1) 

Para consulta do CEP poderá utilizar API pública [ViaCEP](https://viacep.com.br/)

## Para rodar a Fake api: 
  - yarn add [json-server](https://www.npmjs.com/package/json-server)
  - adicionam o seguinte script no package.json:
    - "server": "json-server --watch enterprises-server.json --port 3001"
  - Rodar server: yarn server
  - estará rodando em http://localhost:3001/

## Requisitos da aplicação NextJS
- [ ] Melhorar o código do Sistema Hipotético
- [ ] Padronização com layout proposto
- [ ] Utilizar Typescript
- [ ] Listar Empreendimentos
- [ ] Criar Empreendimento
- [ ] Editar Empreendimento
- [ ] Deletar Empreendimento
- [ ] Styled-components para construção do layout 
- [ ] Responsivo
- [ ] Alterar integração para a API REST
- [ ] Subir no github

## Requisitos da aplicação NodeJS
- [ ] API REST funcional
- [ ] Utilizar Express
- [ ] Utilizar Typescript
- [ ] Subir no github

## Ideias de melhorias
- [ ] Feedback de ações (Sucesso, falha etc)
- [ ] Padronizar chamadas a API
