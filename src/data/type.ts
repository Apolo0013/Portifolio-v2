import type { Stacks } from "../shared/type";

export type AboutProjectCard = {
    name: string,
    aboutProject: string,
    stacks: Stacks[],
    url: string,
}

export type Data = { 
    projects: AboutProjectCard[]
}
