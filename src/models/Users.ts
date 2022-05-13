import client from '../config';
import User from '../types/users';
class Users {
    // create User
    // get User
    // update user
    // delete user
    async createUser([]): Promise<User> {
        try {
            const connection = await client.connect();
            const sql = 'INSERT ';
            const result = await connection.query(sql, []);
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not create user. Error ${err}`);
        }
    }
}
export default User;