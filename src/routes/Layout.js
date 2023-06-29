import Login from '~/pages/Login/Login';
import Mobile from '~/component/Mobile/Mobile';
import HomePage from '~/pages/HomePage/HomePage';
import Register from '~/pages/Register/Register';
import Tablet from '~/component/Tablet/Tablet';
import HeadPhone from '~/component/HeadPhone/HeadPhone';
import BackupCharger from '~/component/BackupCharger/BackupCharger';
import Charger from '~/component/Charger/Charger';
import ChargingCord from '~/component/ChargingCord/ChargingCord';
import Accessory from '~/component/Accessory/Accessory';
import OldMobile from '~/component/OldMobile/OldMobile';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/mobile', component: Mobile },
    { path: '/tablet', component: Tablet },
    { path: '/headphone', component: HeadPhone },
    { path: '/backupcharger', component: BackupCharger },
    { path: '/charger', component: Charger },
    { path: '/chargingcord', component: ChargingCord },
    { path: '/accessory', component: Accessory },
    { path: '/oldprice', component: OldMobile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
