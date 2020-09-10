import API from './api';

export const getAllCategory = async (params) => {
    try{
        const res = await API.get('/category', {params});
        return {
            status: true,
            data: res.data
        }
    } catch(err) {
        return {
            status: false,
            message: "Không lấy được dữ liệu!"
        }
    }
}

export const getCategoryById = async (id) => {
    try{
        const res = await API.get('/category/${id}');
        return {
            status: true,
            data: res.data
        }
    } catch(err) {
        return {
            status: false,
            message: "Không lấy được dữ liệu!"
        }
    }
}