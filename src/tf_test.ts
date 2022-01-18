
import { Injectable } from "@nestjs/common";
import { InfluxDbService } from "./utils/influx";

@Injectable()
export class TrafficService {
    constructor(private readonly influx_service: InfluxDbService) { }

    public async getLastDay() {
        const results = await this.influx_service.query(`
            select MEAN(*) from traffic WHERE time > now() - 1d GROUP BY time(10m);
        `);
        console.log(results);
        // return results.map(pointToDto);
    }
}