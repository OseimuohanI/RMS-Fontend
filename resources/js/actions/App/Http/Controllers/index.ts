import ResourceController from './ResourceController'
import AuthController from './AuthController'
import DashboardController from './DashboardController'
import Settings from './Settings'

const Controllers = {
    ResourceController: Object.assign(ResourceController, ResourceController),
    AuthController: Object.assign(AuthController, AuthController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers