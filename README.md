# DM Training 🏃‍♂️🏊‍♀️

> Sua evolução no esporte começa aqui. Consultoria esportiva personalizada em natação, ciclismo e corrida.

## 📋 Sobre o Projeto

Landing page moderna e responsiva para a DM Training, uma consultoria esportiva especializada em treinos personalizados para modalidades aquáticas e terrestres. O projeto foi desenvolvido com foco na experiência do usuário e conversão de leads através do WhatsApp.

## 🚀 Tecnologias Utilizadas

- **React 19.2.0** - Biblioteca principal para interface
- **TypeScript** - Tipagem estática para melhor manutenibilidade
- **Vite** - Build tool para desenvolvimento rápido
- **Tailwind CSS** - Framework CSS para estilização
- **TrainingPeaks Integration** - Mencionado nos planos de treino

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd dm-training
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   Edite o arquivo `.env` com suas configurações:
   - Número do WhatsApp
   - URLs das imagens
   - Outras configurações necessárias

4. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   ```
   O projeto estará disponível em `http://localhost:3000`

5. **Build para produção**
   ```bash
   npm run build
   ```

6. **Preview da build de produção**
   ```bash
   npm run preview
   ```

## 📁 Estrutura do Projeto

```
dm-training/
├── components/           # Componentes React reutilizáveis
│   ├── HeroSection.tsx   # Seção principal
│   ├── AboutSection.tsx  # Sobre a empresa
│   ├── PricingSection.tsx # Planos e preços
│   └── ...
├── public/              # Arquivos estáticos
├── App.tsx              # Componente principal
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
└── vite.config.ts       # Configuração do Vite
```

## 🎯 Funcionalidades

- ✅ **Landing Page Responsiva** - Adaptável a todos os dispositivos
- ✅ **Sistema de Preços Dinâmico** - Múltiplos ciclos de pagamento
- ✅ **Integração WhatsApp** - Links personalizados por plano
- ✅ **SEO Otimizado** - Meta tags e Open Graph
- ✅ **Animações Suaves** - Transições e efeitos visuais
- ✅ **Header Dinâmico** - Muda ao fazer scroll

## 🎨 Seções da Landing Page

1. **Hero Section** - Apresentação principal com CTA
2. **About Section** - Informações sobre a metodologia
3. **Methodology Section** - Detalhes do processo de treino
4. **Pricing Section** - Planos disponíveis com preços dinâmicos
5. **Testimonials Section** - Depoimentos de clientes
6. **CTA Section** - Chamada final para ação
7. **Footer** - Informações de contato e links

## 📱 Responsividade

O projeto foi desenvolvido com abordagem **mobile-first**, garantindo excelente experiência em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🔧 Personalização

### Alterando o número do WhatsApp
Edite a constante `WHATSAPP_LINK` em `App.tsx` ou configure via variável de ambiente.

### Modificando os planos
Os planos estão definidos no array `allPlans` em `components/PricingSection.tsx`.

### Atualizando imagens
Substitua as URLs do Picsum por suas imagens reais nos componentes correspondentes.

## 🚀 Deploy

O projeto pode ser deployado em qualquer serviço de hospedagem estática:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença [MIT](LICENSE).

## 📞 Contato

DM Training - WhatsApp: [Configurar número real]

Link do Projeto: [URL_DO_REPOSITORIO]

---

⭐ **Feito com dedicação para atletas que buscam excelência!** ⭐