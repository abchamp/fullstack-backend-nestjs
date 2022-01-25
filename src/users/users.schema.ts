import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsersDocument = Users & Document;

@Schema()
export class Users {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    username: string;  
    
    @Prop()
    password: string;

    @Prop()
    roles: string[];

    @Prop({type: Date, default: new Date})
    created_at: Date;

    @Prop({type: Date , default: new Date})
    updated_at: Date;

    @Prop({type: String, default: "system"})
    created_by: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);