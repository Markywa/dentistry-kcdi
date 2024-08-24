export interface ReviewData {
        id: number,
        name: string,
        phone_number: string,
        feedback: string,
        rating: number,
        created_date: Date,
}

export type exportReviewData = Omit<ReviewData, 'created_date' | 'id'>