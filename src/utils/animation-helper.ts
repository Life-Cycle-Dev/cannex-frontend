export const getClassNameAnimation = (
    show: boolean,
    duration: number,
    start: string,
    end: string
): string => {
    const base = `transition-all duration-[${duration}ms]`;

    return ` ${base} ${show ? end : start} `;
};
