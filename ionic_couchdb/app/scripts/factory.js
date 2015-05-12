angular.module('customersApp')
    .factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://127.0.0.1:5984/_utils/database.html?todos/_design/articles/_view/by_status';
    //http://127.0.0.1:5984/_utils/database.html?todos/_design/articles/_view/by_status
    var dataFactory = {};

    dataFactory.getCustomers = function () {
        return $http.get(urlBase);
    };

    dataFactory.getCustomer = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    dataFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    dataFactory.getOrders = function (id) {
        return $http.get(urlBase + '/' + id + '/orders');
    };

    return dataFactory;
}]);