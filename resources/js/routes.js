import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//Index
import Index from './views/index.vue'

// Login section
import Login from "./views/Login/LoginComponent.vue";
import RestablecerContrasena from "./views/Login/RestorePassword.vue";
import NuevaContrasena from "./views/Login/NewPassword.vue";

//Dashboard section
import Overview from "./views/Dashboard/OverviewComponent.vue";

//Users section
import Userslist from "./views/Users/Userslist.vue";
import UserView from "./views/Users/UserView.vue";
import UserProfile from "./views/Users/profileView.vue";
import PermitsUsers from "./views/Users/permissionUsers.vue";
import VendedoresList from './views/vendedores/Lista.vue';

//Customer section
import Customer from './views/Customers/TableView.vue'
import ProfileCustomer from './views/Customers/profileView.vue'

// Error section
import Error from "./views/Error/Error.vue";
import InternalError from "./views/Error/InternalError.vue";
import NotFound from "./views/Error/NotFound.vue";
import NotAuthorized from "./views/Error/NotAuthorized.vue";

//Vendors section
import VendorComponent from './views/vendors/VendorComponent.vue'
import VendorsList from './views/vendors/listView.vue'
import VendorsProfile from './views/vendors/profile.vue'
import VendorsContacts from './views/vendors/Contacts/index.vue'
import VendorsContactsList from './views/vendors/Contacts/contactslist.vue'
import VendorsContactsView from './views/vendors/Contacts/contactsview.vue'

//Case section
import CasesHistory from './views/Cases/timeLineView.vue'

//Categories section
import ListCategoriesTours from './views/Categories/Tours/ListView.vue'
import SaveCategoriesTours from './views/Categories/Tours/SaveView.vue'

//Tours
import IndexTours from './views/Products/Tours/index.vue'
import ListTours from './views/Products/Tours/ListView.vue'
import TourView from './views/Products/Tours/tourView.vue'
import ToursSales from './views/Products/Tours/salesView';
//Paquetes
import PackageListView from './views/Products/Packages/ListView.vue'
import EditView from './views/Products/Packages/EditView.vue'

//OrdersPurchase
import PurchaseOrderListView from './views/PurchaseOrder/ListView.vue'
import PurchaseOrderFormAltaView from './views/PurchaseOrder/FormAltaView.vue'
import PurchaseOrderFormEditarView from './views/PurchaseOrder/FormEditarView.vue'
export default new Router({
    linkExactActiveClass: "active",
    routes: [{
            path: "*",
            redirect: { name: "Overview" },
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
        {
            path: "/restablecer-contrasena",
            name: "RestablecerContrasena",
            component: RestablecerContrasena,
        },
        {
            path: "/nueva-contrasena/:token?",
            name: "NuevaContrasena",
            component: NuevaContrasena,
            props: true,
        },
        {
            path: "/users",
            name: "Users",
            component: Index,
            children: [{
                    path: "",
                    name: "ListUser",
                    component: Userslist,
                },
                {
                    path: "create",
                    name: "CreateUser",
                    component: UserView,
                },
                {
                    path: "edit/:id",
                    name: "EditUser",
                    component: UserView,
                    props: true,
                },
                {
                    path: "profile/:id",
                    name: "perfilUsuario",
                    component: UserProfile,
                    props: true,
                },
                {
                    path: "permissions/:id",
                    name: "permisosUser",
                    component: PermitsUsers,
                    props: true,
                },
                {
                    path: "vendors",
                    name: "userVendors",
                    component: VendedoresList,
                    props: true,
                }
            ],
        },
        {
            path: "/contacts",
            name: "Contacts",
            component: Customer,
        },
        {
            path: '/contacts/profile/:id',
            name: 'profileCustomer',
            component: ProfileCustomer,
            props: true
        },
        {
            path: "/error",
            name: "error",
            component: Error,
            children: [{
                    path: "",
                    name: "internalError",
                    component: InternalError,
                },
                {
                    path: "notfound",
                    name: "notfound",
                    component: NotFound,
                },
                {
                    path: "notauthorized",
                    name: "notauthorized",
                    component: NotAuthorized,
                },
            ]
        },
        {
            path: "/vendors",
            name: "Vendors",
            component: Index,
            children: [{
                    path: "",
                    name: "ListVendor",
                    component: VendorsList,
                },
                {
                    path: "create",
                    name: "CreateVendor",
                    component: VendorComponent,
                },
                {
                    path: "edit/:id",
                    name: "EditVendor",
                    component: VendorComponent,
                    props: true,
                },
                {
                    path: "profile/:id",
                    name: "profileVendor",
                    component: VendorsProfile,
                    props: true,
                },
                {
                    path: "contacts",
                    name: "contactsVendor",
                    component: VendorsContacts,
                    children: [{
                            path: ":id",
                            name: "listContactsVendor",
                            component: VendorsContactsList,
                            props: true,
                        },
                        {
                            path: ":id/create",
                            name: "createContactsVendor",
                            component: VendorsContactsView,
                            props: true,
                        },
                        {
                            path: ":id/edit/:contactId",
                            name: "editContactsVendor",
                            component: VendorsContactsView,
                            props: true,
                        },
                    ]
                },

                
            ]
        },
        {
            path: "/cases",
            name: "cases",
            component: Index,
            children: [{
                path: "history/:id_case",
                name: "caseHistory",
                component: CasesHistory,
                props: true
            }]
        },
        {
            path: "/categories",
            name: "categories",
            component: Index,
            children:[
                {
                    path: "tours",
                    name: "ListCategoriesTours",
                    component: ListCategoriesTours,
                },
                {
                    path: "save",
                    name: "SaveCategoriesTours",
                    component: SaveCategoriesTours,
                },
                {
                    path: "tours",
                    name: "indexTours",
                    component: IndexTours,
                    children: [{
                            path: "",
                            name: "ListTours",
                            component: ListTours,
                        },
                        {
                            path: "edit/:id",
                            name: "editTour",
                            component: TourView,
                            props: true,
                        },
                    ]
                },
                {
                    path: "tours",
                    name: "ListCategoriesTours",
                    component: ListCategoriesTours,
                }
            ]
        },
        {
            path: "/products",
            name: "products",
            component: Index,
            children: [
                {
                    path: "tours",
                    name: "indexTours",
                    component: IndexTours,
                    children: [
                        {
                            path: "",
                            name: "ListTours",
                            component: ListTours,
                        },
                        {
                            path: "edit/:id",
                            name: "editTour",
                            component: TourView,
                            props: true,
                        },
                        {
                            path: "sales",
                            name: "salesTours",
                            component: ToursSales,
                        }
                    ],
                },
                {
                    path: "packages",
                    name: "Packages",
                    component: Index,
                    children: [
                        {
                            path: "list",
                            name: "ListPackages",
                            component: PackageListView,
                        },
                        {
                            path: 'edit/:id',
                            name: 'EditPackageView',
                            component: EditView,
                            props: true
                        }
                    ]
                }
            ]
        },
        {
            path: "/purchase-order",
            name: "PurchaseOrder",
            component: Index,
            children: [
                {
                    path: "list",
                    name: "PurchaseOrderList",
                    component: PurchaseOrderListView
                },
                {
                    path: "alta",
                    name: "PurchaseOrderFormAltaView",
                    component: PurchaseOrderFormAltaView
                },
                {
                    path: "editar/:id_purchase_order",
                    name: "PurchaseOrderFormEditarView",
                    component: PurchaseOrderFormAltaView,
                    props: true,
                }
            ]
        },
        {
            path: "/overview",
            name: "Overview",
            component: Overview,
        },
    ],
    mode: "history",
});