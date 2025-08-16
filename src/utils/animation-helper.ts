export const getClassNameAnimation = (
    show: boolean,
    duration: number,
    delay: number,
    start: string,
    end: string
  ): string => {
    const base = `transition-all duration-[${duration}ms] delay-[${delay}ms]`;
  
    return `${base} ${show ? end : start}`;
  };
