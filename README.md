🚧 Currently In Progress 🚧

# Sistema de Feedback

## Visão Geral
O Sistema de Feedback é uma plataforma projetada principalmente para empresas, facilitando trocas internas de feedback. Funciona de forma semelhante a um sistema de e-mail, mas é direcionado especificamente para comunicações relacionadas a feedback. Os usuários podem se registrar, fazer login e gerenciar sua caixa de entrada de feedback de forma prática.

## Funcionalidades
- **Autenticação de Usuários**: Sistema seguro de login e registro.
- **Caixa de Entrada de Feedback**: Cada usuário possui uma caixa de entrada dedicada para receber feedback.
- **Envio de Feedback**: Envie feedback para outros usuários dentro do sistema.
- **Busca e Filtros**: Permite buscar e filtrar feedbacks por data ou título.
- **Design Responsivo**: Desenvolvido com Angular para garantir uma experiência fluida em diversos dispositivos.

## Tecnologias Utilizadas
### Frontend
- **Framework**: Angular
- **Estilização**: Tailwind CSS utilizando a biblioteca Preline CSS
- **Outras Ferramentas**: Angular CLI

### Backend
- **Framework**: Java Spring Boot
- **Banco de Dados**: H2
- **Segurança**: Spring Security para autenticação

## Instruções de Configuração
### Pré-requisitos
1. Node.js e npm instalados para o frontend.
2. Java 11+ instalado para o backend.
3. Angular CLI instalado globalmente.

### Frontend
1. Navegue até o diretório `frontend`:
   ```bash
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
4. Acesse a aplicação em `http://localhost:4200/`.

### Backend
1. Navegue até o diretório `backend`:
   ```bash
   cd backend
   ```
   
4. O backend estará disponível em `http://localhost:8080/`.

## Endpoints da API
### Autenticação
- `POST /auth/register`: Registrar um novo usuário.
- `POST /auth/login`: Fazer login e receber um token.

### Feedback
- `POST /feedback/new`: Criar um novo feedback.
- `GET /feedback/get/{userId}`: Recuperar os feedbacks de um usuário específico.
- `DELETE /feedback/delete/{id}`: Deletar um feedback.

### Usuários
- `GET /users/all`: Retornar todos os usuários cadastrados.
- `GET /users/{id}`: Retornar um usuário específico.

## Melhorias Futuras
- Implementar um sistema de badges para gamificação e engajamento.
- Implementar notificações por e-mail para novos feedbacks.
- Fornecer análises sobre tendências de feedback.

## Contribuição
Sinta-se à vontade para fazer um fork deste repositório, criar branches de funcionalidades e enviar pull requests. Contribuições são sempre bem-vindas!

## Licença
Este projeto está licenciado sob a Licença MIT.
