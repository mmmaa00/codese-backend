import API from './api';

export const getAll = async () => {
    try {
        const res = await API.get('/class')
        return {
            status: true,
            data: res.data
        }
    }
    catch(err) {
        return {
            status: false,
            message: "Không lấy được dữ liệu"
        }

    }
}

export const getById = async (id) => {
    try {
        const res = await API.get(`/class/${id}`)
        return {
            status: true,
            data: res.data
        }
    }
    catch(err) {
        return {
            status: false,
            message: "Không lấy được dữ liệu"
        }

    }
}
