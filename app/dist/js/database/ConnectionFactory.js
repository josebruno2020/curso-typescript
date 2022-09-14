export class ConnectionFactory {
    static getConnection() {
        return new Promise((resolve, reject) => {
            const openRequest = window.indexedDB.open(this.dbName, this.version);
            openRequest.onupgradeneeded = (e) => {
                this.createStore(e.target.result);
            };
            openRequest.onsuccess = (e) => {
                resolve(e.target.result);
            };
            openRequest.onerror = (e) => {
                reject(e.target.error.name);
            };
        });
    }
    static createStore(connection) {
        this.stores.forEach(store => {
            if (connection.objectStoreNames.contains(store)) {
                connection.deleteObjectStore(store);
            }
            connection.createObjectStore(store, { autoIncrement: true });
        });
    }
}
ConnectionFactory.stores = ['negociacoes'];
ConnectionFactory.version = 4;
ConnectionFactory.dbName = 'aluraframe';
//# sourceMappingURL=ConnectionFactory.js.map