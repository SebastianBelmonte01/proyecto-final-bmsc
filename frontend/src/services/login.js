import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:3001/api/auth',
            data: { username, password }
        });
        if(response.status === 200) {
            const data = response.data;
            localStorage.setItem('id', data.id);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
        }
        return true;
    } catch (err) {
        return false;
    }
};
