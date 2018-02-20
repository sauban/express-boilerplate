import ctrl from '../controllers';
import midwares from '../middlewares';

export default {
    'GET /': [ midwares.hello, ctrl.home.welcome ]
}