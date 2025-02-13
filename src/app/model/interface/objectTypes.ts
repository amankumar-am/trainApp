export interface ILoginObj {
    username: string;
    password: string;
}

export interface IStation {
    stationID: number;
    stationName: string;
    stationCode: string;
}

export interface IPassenger {
    passengerID: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}

export interface APIResponseModel {
    status: string;
    message: string;
    data: any;
}