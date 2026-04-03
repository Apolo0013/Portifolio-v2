import type { ImagensStacks } from "../assets/stacks";
import type { ParamAjustPositionLeft } from "./type";

function useTechItem() {
    function GetStackAbout(stackKey: ImagensStacks): string {
        return StacksAbout[stackKey]
    }
    

    function AjustPositionLeft({
        parent,
        setLeft,
        child
    }: ParamAjustPositionLeft) {
        if (!parent || !child) return 
        //rect
        const childrect: DOMRect = child.getBoundingClientRect()
        const parentrect: DOMRect = parent.getBoundingClientRect()
        //overflow do eixo X
        const Xoverflow: { left: boolean, right: boolean } = {
            left: childrect.left < parentrect.left,
            right: childrect.right > parentrect.right
        }
        //eixo X
        let dx: number = 0    
        if (Xoverflow.left) { 
            dx = parentrect.left - childrect.left
        }
        else if(Xoverflow.right) {
            dx = parentrect.right - childrect.right
        }
        if (Xoverflow.left || Xoverflow.right) setLeft(dx)
    }

    const StacksAbout: Record<ImagensStacks, string> = {
        "cSharp": "Linguagem moderna orientada a objetos da Microsoft, usada para aplicações backend, desktop e jogos com .NET.",
        "python": "Linguagem versátil e produtiva, comum em automação, APIs e ciência de dados.",
        "js": "Linguagem da web para interatividade no navegador e aplicações backend com Node.js.",
        "ts": "Superset do JavaScript com tipagem estática para maior segurança e escalabilidade.",
        "react": "Biblioteca para construção de interfaces web baseadas em componentes",
        "html": "Linguagem de marcação usada para estruturar páginas web.",
        "css": "Linguagem de estilo usada para definir layout e aparência na web.",
        "git": "Sistema de controle de versão distribuído usado para rastrear alterações no código.",
        "gitHub": "Plataforma de hospedagem de repositórios Git com colaboração, issues e CI/CD.",
        "visualStudio": "IDE da Microsoft para desenvolvimento de aplicações .NET, C#, desktop, web e jogos.",
        "reactquery": "Biblioteca para gerenciamento de server state em aplicações React, com cache automático, refetch e sincronização de dados.",
        "tailwind": "Framework CSS utilitário que permite construir interfaces rapidamente usando classes pré-definidas.",
        "zustand": "Biblioteca leve de gerenciamento de estado para React baseada em hooks, simples e com pouca boilerplate.",
        "postgreSql": "Banco de dados relacional avançado, open source, conhecido pela confiabilidade, extensibilidade e forte suporte a consultas complexas.",
        "scss": "Extensão do CSS que adiciona recursos como variáveis, nesting, mixins e funções, facilitando a organização e reutilização de estilos em projetos maiores."
};

    return {
        GetStackAbout,
        AjustPositionLeft
    }
}

export default useTechItem