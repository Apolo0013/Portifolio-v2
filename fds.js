const fds1 = {
  "C#": "Linguagem moderna orientada a objetos da Microsoft, usada para aplicações backend, desktop e jogos com .NET.",
  "Java": "Linguagem orientada a objetos amplamente usada em aplicações corporativas e Android.",
  "Python": "Linguagem versátil e produtiva, comum em automação, APIs e ciência de dados.",
  "JavaScript": "Linguagem da web para interatividade no navegador e aplicações backend com Node.js.",
  "TypeScript": "Superset do JavaScript com tipagem estática para maior segurança e escalabilidade.",
  "Node.js": "Runtime que permite executar JavaScript no backend.",
  "React": "Biblioteca para construção de interfaces web baseadas em componentes.",
  "Next.js": "Framework React com SSR, SSG e otimizações para produção.",
  "Vue.js": "Framework progressivo para criação de interfaces reativas.",
  "Angular": "Framework frontend completo mantido pelo Google.",
  "HTML": "Linguagem de marcação usada para estruturar páginas web.",
  "CSS": "Linguagem de estilo usada para definir layout e aparência na web.",
  "TailwindCSS": "Framework utilitário para estilização rápida via classes.",
  "Sass": "Pré-processador CSS com variáveis e recursos avançados.",
  "PostgreSQL": "Banco de dados relacional robusto e avançado.",
  "MySQL": "Banco de dados relacional amplamente utilizado.",
  "MongoDB": "Banco de dados NoSQL orientado a documentos.",
  "SQLite": "Banco de dados leve baseado em arquivo.",
  "Docker": "Plataforma para criação e execução de containers.",
  "Redis": "Banco de dados em memória usado para cache e filas.",
  "Prisma": "ORM moderno para Node.js e TypeScript.",
  "Express": "Framework minimalista para APIs em Node.js.",
  "FastAPI": "Framework Python de alta performance para APIs.",
  "React Native": "Framework para desenvolvimento mobile com React.",
  "Expo": "Conjunto de ferramentas para acelerar apps React Native.",
  "Firebase": "Plataforma BaaS com autenticação, banco e hospedagem.",
  "Stripe API": "API para processamento de pagamentos online.",
  "Socket.IO": "Biblioteca para comunicação em tempo real via WebSocket.",
  "Redux": "Biblioteca de gerenciamento de estado previsível para aplicações JavaScript.",
  "OpenAI API": "API para integração de modelos de inteligência artificial em aplicações.",
  "Prometheus": "Sistema de monitoramento e coleta de métricas para aplicações e infraestrutura."
}
const fakeProjects = [
        {
            name: "TaskFlow",
            aboutProject: "Sistema de gerenciamento de tarefas com organização por quadros estilo Kanban, autenticação JWT e controle de permissões por usuário.",
            stacks: ["TypeScript", "React", "Node.js", "PostgreSQL", "Prisma"]
        },
        {
            name: "FinanControl",
            aboutProject: "Aplicação web para controle financeiro pessoal com gráficos de despesas, metas mensais e exportação de relatórios em PDF.",
            stacks: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB"]
        },
        {
            name: "DevLink API",
            aboutProject: "API REST para centralizar links profissionais, com sistema de analytics para rastrear cliques e autenticação via OAuth2.",
            stacks: ["Node.js", "Express", "Redis", "Docker"]
        },
        {
            name: "ShopLite",
            aboutProject: "Mini e-commerce com carrinho persistente, checkout simulado e painel administrativo para gerenciamento de produtos.",
            stacks: ["React", "Redux", "Firebase", "Stripe API"]
        },
        {
            name: "CodeReview AI",
            aboutProject: "Ferramenta que analisa repositórios e sugere melhorias de código com base em padrões de clean code e métricas de complexidade.",
            stacks: ["Python", "FastAPI", "OpenAI API", "PostgreSQL"]
        },
        {
            name: "FitTrack",
            aboutProject: "Aplicativo para registro de treinos e evolução física, com histórico detalhado e cálculo automático de progressão de carga.",
            stacks: ["React Native", "Expo", "SQLite"]
        },
        {
            name: "ServerMonitor",
            aboutProject: "Dashboard para monitoramento de servidores com alertas em tempo real, coleta de métricas e visualização via gráficos interativos.",
            stacks: ["Vue.js", "Node.js", "Socket.IO", "Prometheus"]
        }
    ]
    
const chavesAbout = Object.keys(fds1)
const chavesprojetos = fakeProjects.flatMap(x => x.stacks)

const fds = []
for (let v of chavesprojetos) {
    const thisList = chavesAbout.some(x => x == v)
    if (!thisList) fds.push(v)
}
console.log(fds)