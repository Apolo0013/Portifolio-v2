import type { ParamObsSentinel } from "./type"

function useSentinel() {
    function ObsSentinel({ setClassNav, elSentinel }: ParamObsSentinel) {
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setClassNav('stack-disbled')
            else setClassNav("stick-active")
        })
        obs.observe(elSentinel)
    }

    return {
        ObsSentinel
    }
}

export default useSentinel