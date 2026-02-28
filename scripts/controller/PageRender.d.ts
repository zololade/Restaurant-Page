export declare const viewMap: {
    readonly home: ({
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
    readonly about: {
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
    }[];
    readonly menu: ({
        tag: string;
        class: string;
        content: ({
            tag: string;
            content: string;
            class?: never;
        } | {
            tag: string;
            class: string;
            content: {
                tag: string;
                content: (string | {
                    tag: string;
                    content: string;
                })[];
            }[];
        })[];
    } | {
        tag: string;
        class: string;
        content: ({
            tag: string;
            content: string;
            class?: never;
        } | {
            tag: string;
            class: string;
            content: ({
                tag: string;
                src: any;
                alt: string;
                width: string;
                height: string;
                content?: never;
            } | {
                tag: string;
                content: string;
                src?: never;
                alt?: never;
                width?: never;
                height?: never;
            })[];
        })[];
    })[];
    readonly contact: {
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
    }[];
};
export declare function renderView(view: keyof typeof viewMap): void;
//# sourceMappingURL=PageRender.d.ts.map