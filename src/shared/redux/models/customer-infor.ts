
export interface Res_Suc_GetOrders {
    status: number;
    message: string;
    data: GetOrders_Data[];
    optional: GetOrders_Optional;
}

export interface GetOrders_Data {
    id: string;
    code: string;
    datecreate: string;
    total_discount: string;
    customer_id: string;
    store_id: string;
    point: string;
    address: string;
    order_discount: string;
    customer_address_id: string;
    total_cash: string;
    total_transfer: string;
    transporter_id: string;
    source_id: string;
    vat_total: string;
    ship_price: string;
    caption: string;
    total_discount_type: string;
    transporter_type: string;
    payment_ship_price: string;
    transporter_trackingcode: string;
    total: string;
    payment_status: string;
    status: string;
    del_flag: string;
    transport_success: string;
    weight: string;
    phone: string;
    ward_id: string;
    district_id: string;
    province_id: string;
    custom_tracking_code: string;
    vat_value: string;
    is_print: string;
    vat_code: string;
    discount_customer_group_value: string;
    vat_company: string;
    vat_address: string;
    object_id: string;
    total_origin: string;
    import_file_id: string;
    staff_note: string;
    conversation_id: string;
    order_parent_id: string;
    order_parent_pay: string;
    refer_order_id: string;
    order_split_flag: string;
    revert_status: string;
    type: string;
    is_print_transport: string;
    duplicate_order_id: string;
    fullname: string;
    date_modify_status: string;
    vat_product_total: string;
    is_debt_success: string;
    total_cash_view_order: string;
    customer: GetOrders_Customer;
    customer_address: GetOrders_CustomerAddress;
    user: GetOrders_UserClass;
    source: string;
    store: GetOrders_Store;
    transporter: GetOrders_Transporter;
    order_ship: GetOrders_OrderShip;
    order_product: GetOrders_OrderProduct[];
    process_transport: GetOrders_ProcessTransport;
    province: string;
    district: string;
    ward: Ward;
    order_product_detail: GetOrders_OrderProductDetail[] | string;
    tags: string;
    order_extra: GetOrders_OrderExtra | string;
    status_name: string;
    order_history: GetOrders_OrderHistory[];
    cash_flow: string;
    child_order_id: string;
    order_parent: string;
    status_update: GetOrders_StatusUpdate[];
}

export interface GetOrders_Customer {
    id: string;
    code: string;
    fullname: string;
    phone: string;
    email: string;
    address: string;
    province_id: string;
    district_id: string;
    ward_id: string;
    group_id: string;
    point: string;
    province_name: string;
    district_name: string;
    ward_name: string;
    address_full_name: string;
    ratio_order: GetOrders_RatioOrder;
}


export interface GetOrders_RatioOrder {
    ratio: number;
    cancel: string;
    success: string;
    total_order: string;
}

export interface GetOrders_CustomerAddress {
    id: string;
    address: string;
    province_id: string;
    district_id: string;
    ward_id: string;
    code: string;
    name: string;
    phone: string;
}


export interface GetOrders_OrderExtra {
    order_id: string;
    support_note: string;
    datecreate: string;
    dateupdate: string;
}

export interface GetOrders_OrderHistory {
    id: string;
    order_id: string;
    from_status: string;
    to_status: string;
    caption: string;
    datecreate: string;
    from_status_name: string;
    to_status_name: string;
    status_log: GetOrders_StatusLog[];
}



export interface GetOrders_StatusLog {
    User: GetOrders_User;
    id: string;
    order_id: string;
    order_history_id: string;
    name: string;
    note: string;
    del_flag: string;
    channel_id: string;
    usercreate: string;
    datecreate: string;
    type: string;
    is_sample: string;
}

export interface GetOrders_User {
    fullname: string;
    phone: string;
    email: string;
}

export interface GetOrders_OrderProduct {
    channel_product_unit: GetOrders_ChannelProductUnit;
    channel_product: GetOrders_ChannelProduct;
    id: string;
    order_id: string;
    quantity: string;
    price: string;
    discount: string;
    discount_type: string;
    price_import: string;
    caption: string;
    channel_product_unit_id: string;
    status: string;
    quantity_base: string;
    quantity_used: string;
    quantity_warranty: string;
    vat_value: string;
    type: string;
    product_id: string;
    is_serial: string;
}

export interface GetOrders_OrderProductDetail {
    serial: string,
    channel_product_unit_id: string,
    id: string,
    order_id: string,
    order_product_id: string
    store_product_bill_id: string,
    channel_product_id: string,
    product_detail_id: string,
    price_import: string,
    price: string,
    revert_status: string,
    usercreate: string,
    datecreate: string,
    del_flag: string,
    is_sample: string
}

export interface GetOrders_ChannelProduct {
    id: string;
    name: string;
    product_name: string;
    code: string;
    avatar: string;
    is_serial: string;
    vat_value: string;
}

export interface GetOrders_ChannelProductUnit {
    id: string;
    name: string;
    code: string;
    channel_product_id: string;
    value: string;
    price: string;
    product_name: string;
}

export interface GetOrders_OrderShip {
    ship_price: string;
    money_cod: string;
    money_collection: string;
    vtp_status: string;
    ship_config: GetOrders_ShipConfig;
    payer_type: string;
    tracking_code: string;
    vtp_app_status: string;
}

export interface GetOrders_ShipConfig {
    payment: number;
    is_cod: boolean;
    is_fragile: boolean;
    is_express: boolean;
    allow_review: boolean;
    use_insurance: boolean;
    extra: GetOrders_Extra;
    delivery_time: string;
    length: number;
    height: number;
    width: number;
    service_add: string;
    money_view_order?: string;
}

export interface GetOrders_Extra {
    ServiceCode: string;
    CodType: number | string;
}

export interface GetOrders_ProcessTransport {
    status: number;
    msg: string;
    error_msg: string;
}

export interface GetOrders_StatusUpdate {
    key: number;
    class: string;
    value: string;
}

export interface GetOrders_Store {
    id: string;
    name: string;
    type: string;
}

export interface GetOrders_Transporter {
    id: string;
    code: string;
    name: string;
    address: string;
    phone: string;
    type: string;
}

export interface GetOrders_UserClass {
    id: string;
    username: string;
    fullname: string;
    email: string;
    phone: string;
    address: string;
    avatar: string;
}

export interface Ward {
    district_name: string;
    city_name: string;
    tctk_id: string;
    "@timestamp": string;
    name: string;
    "@version": string;
    vtp_id: number;
    id: number;
    district_id: number;
    fullname: string;
    ward_id: number;
    city_id: number;
}

export interface GetOrders_Optional {
    page: Page;
    order_status: string;
    total: string;
}

// thong tin khach hang

export interface Res_Suc_CustomerInfo {
    status: number;
    message: string;
    data: CustomerInfo_Data[];
    optional: CustomerInfo_Optional;
    code: string;
    error: string;
}

export interface CustomerInfo_Data {
    customer_group: CustomerInfo_CustomerGroup;
    store: CustomerInfo_Store;
    user: CustomerInfo_User;
    Source: { [key: string]: string | string };
    id: string;
    social: string;
    social_type: string;
    fullname: string;
    phone: string;
    email: string;
    address: string;
    dob: string;
    type: string;
    gender: string;
    job: string;
    group_id: string;
    channel_id: string;
    caption: string;
    usercreate: string;
    datecreate: string;
    username: string;
    last_login: string;
    store_id: string;
    company_name: string;
    company_address: string;
    company_contactor: string;
    contactor_phone: string;
    contactor_email: string;
    point: string;
    page_id: string;
    code: string;
    avatar: string;
    link: string;
    id_number: string;
    hobby: string;
    family: string;
    source_id: string;
    total_money: string;
    province_id: string;
    district_id: string;
    ward_id: string;
    is_sample: string;
    curator_id: string;
    group_employee_id: string;
    tax_code: string;
    banking_account: string;
    facebook_name: string;
    ward: Ward;
    ratio_order: CustomerInfo_RatioOrder;
    count_order: number;
    curator_name: string;
    groupEmployee_name: string;
}

export interface CustomerInfo_CustomerGroup {
    id: string;
    name: string;
    point: string;
    level: string;
    def: string;
    discount: string;
    status: string;
}
export interface CustomerInfo_Source {
    id: string,
    name: string,
    link: string
    status: string,
    channel_id: string,
    usercreate: string,
    datecreate: string,
    del_flag: string,
    page_id: string,
    type: string,
    domain_web: string,
    is_sample: string
}
export interface CustomerInfo_RatioOrder {
    ratio: number;
    cancel: number;
    success: string;
    total_order: string;
}

export interface CustomerInfo_Store {
    id: string;
    name: string;
    address: string;
}

export interface CustomerInfo_User {
    id: string;
    username: string;
    fullname: string;
    avatar: string;
}

export interface Ward {
    district_name: string;
    city_name: string;
    tctk_id: string;
    "@timestamp": string;
    name: string;
    "@version": string;
    vtp_id: number;
    id: number;
    district_id: number;
    fullname: string;
    ward_id: number;
    city_id: number;
}

export interface CustomerInfo_Optional {
    page: CustomerInfo_Page;
}

export interface CustomerInfo_Page {
    current: number;
    limit: number;
    total: number;
    total_pages: number;
}

// lay danh sach tinh/thanh pho
export interface Res_Suc_GetCity {
    status: number;
    message: string;
    data: GetCity_Data[];
    optional: GetCity_Optional;
}

export interface GetCity_Data {
    tctk_id: string;
    name: string;
    vtp_id: number;
    id: number;
    zip_code: string;
}

export interface GetCity_Optional {
    page: GetCity_Page;
}

export interface GetCity_Page {
    current: number;
    limit: number;
    total: number;
    total_pages: number;
}

// danh sach quan/huyen

export interface Res_Suc_GetDistrict {
    status: number;
    message: string;
    data: GetDistrict_Data[];
    optional: GetCity_Optional;
}

export interface GetDistrict_Data {
    tctk_id: string;
    name: string;
    vtp_id: number;
    id: number;
}

// danh sach xa/ phuong

export interface Res_Suc_GetWard {
    status: number;
    message: string;
    data: GetWard_Data[];
    optional: GetCity_Optional;
}

export interface GetWard_Data {
    tctk_id: string;
    name: string;
    vtp_id: number;
    id: number;
    district_id: number;
    fullname: string;
    city_id: number;
}

// Generated by https://quicktype.io

export interface Res_Suc_CustomerGroup {
    status: number;
    message: string;
    data: CustomerGroup_Data[];
    optional: GetCity_Optional;
}

export interface CustomerGroup_Data {
    id: string;
    name: string;
    status: string;
    channel_id: string;
    discount: string;
    datecreate: string;
    usercreate: string;
    del_flag: string;
    point: string;
    level: string;
    def: string;
    is_sample: string;
    user: GroupCustomer_User;
}

export interface GroupCustomer_User {
    username: string;
    email: string;
    id: string;
    fullname: string;
}

export interface Put_Customer_Info {
    fullname: string,
    phone: string,
    email: string,
    address: string,
    dob: string,
    gender: string,
    group_id: string,
    province_id?: number,
    district_id?: number,
    ward_id?: number,
    page_id: string,
    social?: number,
    social_type: string
}

export interface Res_Suc_UpdateCustomer {
    status: number;
    message: string;
}

export interface Res_Suc_GetReportCustomer {
    status: number;
    data: GetReportCustomer_Data;
    message: string;
}

export interface GetReportCustomer_Data {
    buyerOnePage: any;
    buyerOnAllPage: GetReportCustomer_BuyerOnAllPage[];
}

export interface GetReportCustomer_BuyerOnAllPage {
    reports: GetReportCustomer_Report[];
    denounce_histories: GetReportCustomer_DenounceHistory[];
    _id: string;
    denounce_all: boolean;
    denounce_one_page: boolean;
    phone: string;
    __v: number;
    channel_name: string;
    channel_id: string;
    datecreate: string;
    buyer_name: string;
    buyer_social_id: string;
}

export interface GetReportCustomer_DenounceHistory {
    id: number;
    denouncer_name: string;
    denouncer_id: number;
    email: any;
    avatar: string;
    phone: string;
    email_verified: number;
    verified: number;
    channel_id: string;
    page_id: string;
    content: string;
    page_name: string;
    datecreate: string;
    dateDelete: number;
    nameDelete: string;
    denounce_one_page: boolean;
    denounce_all: boolean;
    user_id: number;
}

export interface GetReportCustomer_Report {
    id: number;
    denouncer_name: string;
    denouncer_id: number;
    email: any;
    avatar: string;
    phone: any;
    email_verified: number;
    verified: number;
    channel_id: string;
    page_id: string;
    content: string;
    page_name: string;
}


export interface Page {
    current: string;
    limit: string;
    total: number;
    total_pages: number;
}

export interface Res_Error {
    status: number;
    message: string;
    data: string;
    error: Error;
}

export interface Error {
    type: string;
    message: string;
    code: number;
}