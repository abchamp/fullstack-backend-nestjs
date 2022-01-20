
import { Injectable } from "@nestjs/common";
import { InfluxDbService } from "../influx_module";

@Injectable()
export class influxLogService {
    constructor(private readonly influx_service: InfluxDbService) { }
    // influx_init.iql
    // username
    // userid
    // type of request: POST PUT DELETE
    // request url 
    // get parameter
    // post body
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

    public async check_measurement() {
        try {
            const results = await this.influx_service.getMeasurements();
            // create
            console.log(results);
        } catch (err) {
            console.log("influx server log fail")
        }
    }
    public async create_log() {
        // if error message must be saving
        try {
            const results = await this.influx_service.writePoints([
                {
                    measurement: "server_logging",
                    tags: { name: "alliedhs_bangsean_backend" },
                    fields: {
                        username: "champ",
                        userid: "1",
                        httpmethod: "post",
                        url: "/users",
                        id: "000",
                        param_get: "id=000",
                        level: "info",
                        body_post_put: "{}",
                        error_msg: "",
                        ip: "11",
                    }
                }
            ])
        } catch (err) {
            console.log(err);
        }
    }
}