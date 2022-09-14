export class ConnectionFactory {
  private static stores = ['negociacoes']
  private static version = 4
  private static dbName = 'aluraframe'

  static getConnection(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {

      const openRequest = window.indexedDB.open(this.dbName, this.version)

      openRequest.onupgradeneeded = (e: any) => {
        this.createStore(e.target.result)
      }

      openRequest.onsuccess = (e: any) => {
        resolve(e.target.result)
      }

      openRequest.onerror = (e: any) => {
        reject(e.target.error.name)
      }

    })
  }

  private static createStore(connection: IDBDatabase) {
    this.stores.forEach(store => {
      if (connection.objectStoreNames.contains(store)) {
        connection.deleteObjectStore(store)
      }
      connection.createObjectStore(store, { autoIncrement: true })
    })
  }

}