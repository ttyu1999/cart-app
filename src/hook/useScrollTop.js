const useScrollTop = () => {
    const scrollToTop = () => {
        const body = document.body;

        body.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }

    return { scrollToTop };
}

export default useScrollTop;