import { Router } from'express';

class NewsRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req, res) => res.send('News'));
    }
}

const newsRoutes = new NewsRoutes();
export default newsRoutes.router; 