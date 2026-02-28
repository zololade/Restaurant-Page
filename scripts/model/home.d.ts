declare const HomeData: ({
    tag: string;
    src: any;
    width: string;
    height: string;
    content?: never;
} | {
    tag: string;
    content: ({
        tag: string;
        content: string;
    } | {
        tag: string;
        content: (string | {
            tag: string;
            content: string;
        })[];
    })[];
    src?: never;
    width?: never;
    height?: never;
} | {
    tag: string;
    content: ({
        tag: string;
        content: string;
    } | {
        tag: string;
        content: {
            tag: string;
            content: (string | {
                tag: string;
                content: string;
            })[];
        }[];
    })[];
    src?: never;
    width?: never;
    height?: never;
})[];
export { HomeData };
//# sourceMappingURL=home.d.ts.map