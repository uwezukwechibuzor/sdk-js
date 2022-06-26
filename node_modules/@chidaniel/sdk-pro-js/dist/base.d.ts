declare type Config = {
    apiKey: string;
    baseurl?: string;
};
export declare abstract class Base {
    private apiKey;
    private baseUrl;
    constructor(config: Config);
    protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T>;
}
export {};
