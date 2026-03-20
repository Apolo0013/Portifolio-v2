import type { AboutProjectCard, Data } from './type'
//data
import projects from './projects.json'
//"wraper" para tipa-lo
const wraperProjects: unknown = projects
//add em datas. ondem nois possamos organizar como necessario.
export const datas: Data = {
    projects: wraperProjects as AboutProjectCard[]
}