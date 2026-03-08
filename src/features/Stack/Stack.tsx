import CardStack from './componentes/CardStack/CardStack'
import './Stack.scss'
import type { MyStacks, NamesAppLayers } from './type';

function Stack() {
    const myStacks: Record<NamesAppLayers, MyStacks> = {
        "Front-end": {
            name: "Front-end",
                stackimg: [
                    "react",
                    "ts",
                    "js",
                    "reactquery",
                    'tailwind',
                    'zustand',
                    'html',
                    'css'
                ]
        },
        "Back-end":{
            name: "Back-end",
                stackimg: [
                    "cSharp",
                    "postgreSql",
                    'python'
                ]
    },
        "Ferramentas":{
            name: "Ferramentas",
                stackimg: [
                    "git",
                    "gitHub",
                    "visualStudio"
            ]
        }
    }

    return (    
        <section className='stack'>
            <div className='w-full flex flex-col flex-center gap-8'  aria-label='Titulo sessão stacks'>
                <h1 className='h1-text'>Stacks</h1>
                <p className='p-text'>Tecnologias que utilizo no desenvolvimento de aplicações modernas.</p>
            </div>
            <div className='stack-grid'>
                <CardStack left='50%' AppLayer={myStacks['Front-end']}/>
                <CardStack left='50%' AppLayer={myStacks['Back-end']}/>
                <CardStack left='-100%' AppLayer={myStacks.Ferramentas}/>
            </div>
        </section>
    )
}

export default Stack