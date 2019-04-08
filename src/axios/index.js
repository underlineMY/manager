import JsonP from 'jsonp';

export default class Axios {
    static jsonp(opt){
        return new Promise((resolve, reject) => {
            JsonP(opt.url, {
                param: 'callback'
            }, (err, response) => {
                if(response.status ==='success') {
                    resolve(response);
                }else {
                    reject(err.message);
                }
            })
        })
    }
}