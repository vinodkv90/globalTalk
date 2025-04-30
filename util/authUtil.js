import { LOGIN_TOKEN_KEY, PERSIST_TIME_DAYS } from '@/constants/blockTypes'

export const setLocalStorageWithExpiry = (key, value, ttl) => {
    const now = new Date()
    const item = {
        value: value,
        expiry: now.getTime() + (ttl * 1000),
    }
    localStorage.setItem(key, JSON.stringify(item))
}

export const getLocalStorageWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key)
        return null
    }
    return item.value
}

export const getToken = () => {
    if (typeof window !== "undefined")
    return getLocalStorageWithExpiry(LOGIN_TOKEN_KEY);
};

export const isUserSignedIn = () => {
    if (typeof window !== "undefined") {
        const token = getLocalStorageWithExpiry(PERSIST_TIME_DAYS);
        if (token) return true;
        else return false;
    }
};

export const settingUpToken = ({ login_token }) => {
    setLocalStorageWithExpiry(
        LOGIN_TOKEN_KEY,
        login_token,
        PERSIST_TIME_DAYS * 86400
    );
};
