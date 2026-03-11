function useObs() {
    type ParamObserverElement = {
        el: HTMLElement,
        callbackView: () => void,
        callbackNoView: () => void
    }
    function ObserverElement({
        el,
        callbackNoView,
        callbackView
    }: ParamObserverElement) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry) callbackView()
                else callbackNoView()
            })
        }, {threshold: 0.8})

        obs.observe(el)
    }

    return {
        ObserverElement
    }
}

export default useObs