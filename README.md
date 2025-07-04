# Fitness App (Mobile)

Aplicativo mobile do projeto **Fitness App**, desenvolvido com **React Native**, **TypeScript**, **Zustand**, **React Query**, **Gluestack UI**, **NativeWind** e **Axios**.

---

## Tecnologias Utilizadas

- **React Native** (Expo)
- **TypeScript**
- **Zustand** – Gerenciamento de estado global
- **React Query** – Cache e controle de requisições
- **Axios** – Cliente HTTP
- **Gluestack UI** – Sistema de design acessível e flexível
- **NativeWind** – Estilização com Tailwind no React Native
- **React Navigation** – Navegação entre telas

---

## Arquitetura e Decisões Técnicas

Este projeto foi desenvolvido com foco em **organização**, **manutenibilidade** e **reutilização de código**:

### 📦 Padrão em camadas com DDD simplificado

- **Separação clara entre Domínio e Interface (UI):**
  - A lógica de negócio e consumo de API fica fora das telas.
  - Componentes são desacoplados, reutilizáveis e sem lógica pesada.

- **Pastas como domínios funcionais:**
/domain/exercise
- useCases/
- exerciseApi.ts
- exerciseService.ts
- exerciseTypes.ts


- **Hooks customizados por domínio**:  
Toda lógica de estado e side-effects fica encapsulada em hooks no domínio, como `useExerciseById`, `useCreateExercise`, etc.

- **Axios + Interceptors**:  
Integração com back-end utilizando interceptors para autenticação via token e controle centralizado de erros.

- **Gluestack UI + NativeWind**:  
Combinação poderosa para UI moderna e estilização rápida com classe utilitária no estilo Tailwind.

- **Zustand como store global leve**, ideal para manter credenciais e estados compartilhados de forma reativa e simples.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Emulador Android/iOS ou dispositivo físico com o app [Expo Go](https://expo.dev/client)

---

## Como rodar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Fabiano-Bragaaa/fitness-app.git
cd fitness-app
2️⃣ Instalar dependências

yarn install
# ou
npm install
3️⃣ Configurar variáveis de ambiente
Crie um arquivo .env na raiz com as seguintes chaves:

API_URL=http://SEU_BACKEND_LOCAL:3333/
Dica: se estiver testando via celular, use o IP da sua máquina no API_URL, não localhost.

4️⃣ Rodar o projeto

npx expo start
Escaneie o QR Code com o app Expo Go (Android/iOS)

Ou use um emulador com tecla a (Android) ou i (iOS)
s
Comandos Úteis
Limpar cache do Expo:

npx expo start --clear
