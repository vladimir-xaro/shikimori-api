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

// export type DateStringISO8601  = string;
export type DateStringISO8601 = DateStringISO8601.Full;
declare namespace DateStringISO8601 {
    type YYYY = `${number}`;
    type MM = `${number}`;
    type DD = `${number}`;
    type hh = `${number}`;
    type mm = `${number}`;
    type ss = `${number}`;
    type TZD = `${`+` | `-`}${number}:${number}`;

    /** `2022-11-19T17:19:31+03:00` */
    type Full = `${YYYY}-${MM}-${DD}T${hh}:${mm}:${ss}${TZD}`;
}
