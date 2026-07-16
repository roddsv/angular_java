# 💻 PGE-Ride - Painel de Controle Angular

Este é o frontend da aplicação **PGE-Ride**, uma plataforma reativa desenvolvida para conectar passageiros da PGE-Ceará a motoristas disponíveis. O app possui interfaces dedicadas, renderização rápida e atualizações de status em tempo real.

---

## 🛠️ Tecnologias e Bibliotecas Utilizadas

*   **Angular 22** - Framework SPA moderno utilizando arquitetura Standalone Components e Signals.
*   **Tailwind CSS v4** - Framework de estilização de última geração focado em utilitários, integrado diretamente via motor Esbuild moderno sem arquivos legados de configuração.
*   **PostCSS / Autoprefixer** - Processadores de CSS modernos para cross-browser compatibilidade.
*   **RxJS** - Programação reativa para manipulação de streams de dados, chamadas HTTP assíncronas e manipulação de EventSource (SSE).

---

## 🎯 Casos de Uso Implementados

*   **Solicitação de Corridas (Passageiro):** Entrada dinâmica de origem e destino mapeando o `userId` em tempo real contra o banco de dados de contas.
*   **Painel do Motorista:** Listagem ativa de solicitações pendentes vindas do banco de dados com atualização manual rápida.
*   **Aceitação de Corrida:** Motoristas podem selecionar e aceitar viagens, mudando instantaneamente o status geral no ecossistema de microsserviços.

---

## 🌐 Integração, Proxy e Portas

Para evitar restrições de **CORS** (Cross-Origin Resource Sharing) durante o desenvolvimento, o servidor de desenvolvimento do Angular utiliza um arquivo de proxy (`proxy.conf.json`).

*   **Porta do Frontend:** `http://localhost:4200`
*   **Porta de Destino (Gateway):** `http://localhost:8080`
*   **Roteamento:** Qualquer requisição iniciada com o prefixo `/api` no frontend (ex: `http://localhost:4200/api/rides`) é automaticamente redirecionada pelo servidor do Angular para `http://localhost:8080/api/rides` de forma transparente.

---

## 📺 Onde as Notificações Disparam no Console do Frontend?

Como desenvolvedor, você pode acompanhar a transmissão assíncrona de eventos inspecionando o console do navegador (**F12 -> aba Console**):

1.  **Postagem de Corrida:**
    *   Ao clicar em "Solicitar Corrida", o console disparará:
        ```text
        Corrida criada com sucesso no backend: { id: 12, origin: '...', destination: '...', status: 'SOLICITADO' }
        ```
2.  **Aceitação no Motorista:**
    *   Ao aceitar a corrida no painel do motorista, o console exibirá:
        ```text
        Corrida aceita com sucesso: { id: 12, origin: '...', destination: '...', status: 'ACEITO', driverId: 3 }
        ```
3.  **Transmissão de Atualização via SSE (Server-Sent Events):**
    *   Assim que a escuta de canais em tempo real estiver ativa, o console do passageiro imprimirá o recebimento instantâneo da mensagem enviada pelo servidor:
        ```text
        [SSE Event] Nova atualização de status recebida: ACEITO. Motorista a caminho!
        ```

---

## 🚀 Como Subir o Frontend

### Pré-requisitos
*   Node.js instalado (Versão 18 ou superior recomendado).
*   Gerenciador de pacotes NPM (incluso no Node).

### Passo a Passo

1.  **Instalar Dependências:**
    Acesse a pasta raiz do frontend e execute o comando abaixo para baixar as dependências e compiladores do Tailwind CSS v4 de forma local:
    ```bash
    npm install
    ```

2.  **Subir o Servidor de Desenvolvimento:**
    Inicie o projeto garantindo que ele carregue as configurações corretas mapeadas no seu `package.json`:
    ```bash
    npm run start
    ```
    *(Esse comando executa o `ng serve` apontando para o arquivo de proxy local).*

3.  **Acessar a Aplicação:**
    Abra seu navegador favorito e navegue pelas rotas:
    *   **Painel do Passageiro:** [http://localhost:4200/passenger](http://localhost:4200/passenger)
    *   **Painel do Motorista:** [http://localhost:4200/motorista](http://localhost:4200/motorista)
