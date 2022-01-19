
import { Injectable } from "@nestjs/common";
import { InfluxDbService } from "../influx_module";

@Injectable()
export class influxLogService {
    constructor(private readonly influx_service: InfluxDbService) { }
    // influx_init.iql
    // userid
    // type of request: POST PUT DELETE
    // request url 
    // id where create and update
    // ** error message where get 
    // timestamp
    public async check_connect() {
        try {
            const results = await this.influx_service.ping(10);
            if (results[0]['online'] === true) {
                console.log("influx server: connect")
            } else {
                console.log("influx server: disconnect")
            }
        } catch (err) {
            console.log("influx server log fail")
        }
    }
    public async create_log() {
        // if error message must be saving

        // const results = await this.influx_service.query(`
        //     select MEAN(*) from traffic WHERE time > now() - 1d GROUP BY time(10m);
        // `);
        // console.log(results);
        // return results.map(pointToDto);
    }
}