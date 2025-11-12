// js/user-db.js - gerencia dados de usuário usando IndexedDB

(function(window) {
    const DB_NAME = 'youship_user_db';
    const STORE_NAME = 'users';

    function openUserDB() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const objectStore = db.createObjectStore(STORE_NAME, { keyPath: 'email' });
                    objectStore.createIndex('email', 'email', { unique: true });
                }
            };

            request.onsuccess = (event) => {
                resolve(event.target.result);
            };

            request.onerror = (event) => {
                reject('Error opening IndexedDB for users: ' + event.target.errorCode);
            };
        });
    }

    async function addUser(user) {
        const db = await openUserDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const objectStore = transaction.objectStore(STORE_NAME);
            const request = objectStore.add(user);

            request.onsuccess = () => {
                resolve(user);
            };

            request.onerror = (event) => {
                reject('Error adding user: ' + event.target.error);
            };

            transaction.oncomplete = () => {
                db.close();
            };

            transaction.onabort = () => {
                db.close();
            };
        });
    }

    async function getUserByEmail(email) {
        const db = await openUserDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const objectStore = transaction.objectStore(STORE_NAME);
            const request = objectStore.get(email);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = (event) => {
                reject('Error getting user by email: ' + event.target.error);
            };

            transaction.oncomplete = () => {
                db.close();
            };

            transaction.onabort = () => {
                db.close();
            };
        });
    }

    async function updateUser(user) {
        const db = await openUserDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const objectStore = transaction.objectStore(STORE_NAME);
            const request = objectStore.put(user); // put will update if key exists, add if not

            request.onsuccess = () => {
                resolve(user);
            };

            request.onerror = (event) => {
                reject('Error updating user: ' + event.target.error);
            };

            transaction.oncomplete = () => {
                db.close();
            };

            transaction.onabort = () => {
                db.close();
            };
        });
    }

    async function deleteUser(email) {
        const db = await openUserDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const objectStore = transaction.objectStore(STORE_NAME);
            const request = objectStore.delete(email);

            request.onsuccess = () => {
                resolve(true);
            };

            request.onerror = (event) => {
                reject('Error deleting user: ' + event.target.error);
            };

            transaction.oncomplete = () => {
                db.close();
            };

            transaction.onabort = () => {
                db.close();
            };
        });
    }

    // Expose functions to the global scope
    window.YouShipUserDB = {
        addUser,
        getUserByEmail,
        updateUser,
        deleteUser
    };

})(window);
