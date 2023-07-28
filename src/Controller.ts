export default abstract class Controller implements HasApi {
    api: Schema.API;

    constructor(api: Schema.API) {
        this.api = api;
    }
}