import ShikimoriAPI from 'ShikimoriAPI'

export default () => {
    return new ShikimoriAPI({
        controllers: {
            v1: {
                Anime: v1.AnimesController,
            }
        }
    })
}