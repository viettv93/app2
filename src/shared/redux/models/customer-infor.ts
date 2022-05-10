
export interface Res_Suc_GetAddress {
    status: number;
    message: string;
    data: GetAddress_Data[];
    optional: GetAddress_Optional;
}

export interface GetAddress_Data {
    tctk_id: string;
    name: string;
    vtp_id: number;
    id: number;
    zip_code: string;
}

export interface GetAddress_Optional {
    page: GetAddress_Page;
}

export interface GetAddress_Page {
    current: number;
    limit: number;
    total: number;
    total_pages: number;
}
export interface Res_Error {
    status: number;
    message: string;
    data: string;
    error: Error;
}