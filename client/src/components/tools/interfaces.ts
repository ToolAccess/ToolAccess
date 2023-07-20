export interface ITool {
    id:number,
    name: string,
    type: string,
    imageUrl: string,
    description: string,
    standardPrice: number,
    discountPrice: number,
    hasOffer: boolean,
    offerOption: number,
    rentalPeriod: number,
    isAvailable: false,
    userId: number,
    category: string

}

export interface IRental {
    rentalId: number,
    startDate: string,
    "endDate": string,
    "status": string,
    "userId": number,
    "toolId": number,
    "rentalPrice": number,
    "createdAt": string
}
