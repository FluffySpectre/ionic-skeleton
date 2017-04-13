import { Serializable } from '../interfaces/Serializable';

export class UserProfile implements Serializable<UserProfile> {
    id: number;
    nickname: string;
    token: string;
    email: string;

    constructor() {}

    deserialize(input: any): UserProfile {
        if (input == null) return this;

        this.id = input.id;
        this.nickname = input.nickname;
        this.token = input.token;
        this.email = input.email;

        return this;
    }
}
