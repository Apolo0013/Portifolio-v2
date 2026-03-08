import js from './js.svg'
import react from './react.svg'
import ts from './ts.svg'
import zustand from './zustand.svg'
import cSharp from './c-sharp.svg'
import postgreSql from './postgresql.svg'
import tailwind from './tailwind.svg'
import reactquery from './react-query.svg'
import git from './git.svg'
import visualStudio from './visual-studio.svg'
import gitHub from './github.svg'
import html from './html.svg'
import css from './css.svg'
import python from './python.svg'

export const imagens = {
    react: react,
    js: js,
    ts: ts,
    zustand: zustand,
    cSharp: cSharp,
    postgreSql: postgreSql,
    tailwind: tailwind,
    reactquery: reactquery,
    git: git,
    gitHub: gitHub,
    visualStudio: visualStudio,
    css: css,
    html: html,
    python: python,
} as const

export type ImagensStacks = keyof typeof imagens

export const nameStacks: Record<ImagensStacks, string> = {
    cSharp: "C#",
    git: "Git",
    gitHub: "GitHub",
    js: "JavaScript",
    postgreSql: "PostgreSQL",
    react: "React",
    reactquery: "TanStack Query",
    tailwind: "Tailwind CSS",
    ts: "TypeScript",
    visualStudio: "Visual Studio",
    zustand: "Zustand",
    css: "CSS",
    html: "HTML",
    python: "Python"
} as const