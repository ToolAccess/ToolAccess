export interface ITool {
    name: string,
    type: string,
    description: string,
    productId: number,
}

export interface IToolResponse {
    data: ITool[],
    totalCount: number,
}