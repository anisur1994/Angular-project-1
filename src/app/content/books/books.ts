export class Books {
    constructor(
        public id: number,
        public name: string,
        public author: string,
        public isbn: number,
        public category: string,
        public description: string,
        public price: number,
        public image: string
    ){}
}
