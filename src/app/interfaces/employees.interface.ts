export interface EmployeesResponse {
    about: string,
    experience: string,
    id: number,
    job: string,
    name: string,
    photo: string,
}

export interface SpecialistsResponse {
    about: string,
    experience: string,
    id: number,
    job: string,
    name: string,
    carousel_photo: string,
    not_a_doctor?: boolean,
}