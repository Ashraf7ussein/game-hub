import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'a42e58f30d334e139fa2812e8470ae29',
    }
})