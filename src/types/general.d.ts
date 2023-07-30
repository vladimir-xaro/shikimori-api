/** General */

export type ParamsWithPage = {
    page?: number; // between 1 and 100_000
};

export type ResponseWithSuccess = {
    success: boolean;
}
export type ResponseWithNotice = {
    notice: string;
};

export type NumOrNumStr   = `${number}` | number;

export type BoolOrNumBool = true | false | 1 | 0;

export type DateString         = string;
export type DateStringWithUTC  = string;
