export type ElementObject = {
    tag: string;
    content?: string | PageData[];
    [key: string]: unknown;
};
export type PageData = ElementObject | PageData[] | string | number;
export default class Page {
    static isObject(value: unknown): value is ElementObject;
    static build(incomingObject: PageData): HTMLElement | DocumentFragment | Text;
    static render(host: HTMLElement, elem: HTMLElement | DocumentFragment | Text): void;
}
//# sourceMappingURL=Page.d.ts.map