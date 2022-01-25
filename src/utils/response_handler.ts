//  errType for login
// 0 = success
// 1 = validate error
// 2 = server error
export function successResp(data: Object, msg: any=null, username: string="", errType: number=0) {
    return {
        errType: errType,
        code: 200,
        data: data,
        msg: msg,
        username: username,
    }
}

export function errorResp(data: Object, msg: String = "server fail") {
    return {
        errType: 2,
        code: 500,
        data: data,
        msg: msg
    }
}